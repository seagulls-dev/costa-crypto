<?php

namespace App\Adapters\Coin;


use App\Adapters\Coin\Exceptions\AdapterException;
use App\Adapters\Coin\Resources\Address;
use App\Adapters\Coin\Resources\Transaction;
use App\Adapters\Coin\Resources\Wallet;
use GuzzleHttp\Client;
use HolluwaTosin360\BitGoPHP\BitGo;
use HolluwaTosin360\BitGoPHP\Coin;

class BitcoinAdapter extends CoinAdapter
{
	const NAME = 'Bitcoin';
	const IDENTIFIER = "btc";
	const BASE_UNIT = 100000000;
	const PRECISION = 8;
	const SYMBOL = "BTC";
	const SYMBOL_FIRST = true;
	const COLOR = '#c27000';

	/**
	 * Bitgo Instance
	 *
	 * @var BitGo
	 */
	protected $bitgo;

	/**
	 * Dollar Price
	 *
	 * @var float
	 */
	protected $dollarPrice;

	/**
	 * BitcoinAdapter constructor.
	 *
	 * @throws \Exception
	 */
	public function __construct()
	{
		$this->init();
	}

	/**
	 * Initialize BitGo Helper class
	 *
	 * @throws \Exception
	 */
	private function init()
	{
		$bitgo = resolve(BitGo::class);

		if (config()->get('bitgo.env') == "prod") {
			$bitgo->setCoin(Coin::BITCOIN);
		} else {
			$bitgo->setCoin(Coin::TEST_BITCOIN);
		}

		$this->bitgo = $bitgo;
	}

	/**
	 * Exclude bitgo property
	 *
	 * @return array
	 */
	public function __sleep()
	{
		return [];
	}

	/**
	 * @throws \Exception
	 */
	public function __wakeup()
	{
		$this->init();
	}

	/**
	 * Get coin name
	 *
	 * @return string
	 */
	public function getName(): string
	{
		return self::NAME;
	}

	/**
	 * Get coin identifier
	 *
	 * @return string
	 */
	public function getIdentifier(): string
	{
		return self::IDENTIFIER;
	}

	/**
	 * Get coin unit
	 *
	 * @return string
	 */
	public function getBaseUnit()
	{
		return self::BASE_UNIT;
	}

	/**
	 * Get coin precision
	 *
	 * @return int
	 */
	public function getPrecision()
	{
		return self::PRECISION;
	}

	/**
	 * Get coin symbol
	 *
	 * @return mixed
	 */
	public function getSymbol(): string
	{
		return self::SYMBOL;
	}

	/**
	 * Show symbol first
	 *
	 * @return bool
	 */
	public function showSymbolFirst(): bool
	{
		return self::SYMBOL_FIRST;
	}

	/**
	 * @return string
	 */
	public function getColor(): string
	{
		return self::COLOR;
	}

	/**
	 * Generate wallet
	 *
	 * @param string $label
	 * @param string $passphrase
	 * @return Wallet
	 * @throws AdapterException
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 * @throws \Exception
	 */
	public function createWallet($label, $passphrase): Wallet
	{
		$response = $this->bitgo->generateWallet($label, $passphrase);
		$data = collect($response);

		return new Wallet([
			'id'   => $data->get('id'),
			'data' => $data->toArray()
		]);
	}

	/**
	 * Create address for users
	 *
	 * @param Wallet $wallet
	 * @param $label
	 * @return Address
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 * @throws AdapterException
	 * @throws \Exception
	 */
	public function createWalletAddress(Wallet $wallet, $label = 'Default'): Address
	{
		$this->bitgo->setWalletId($wallet->getId());

		$response = $this->bitgo->createWalletAddress(false, 0, null, $label);
		$data = collect($response);

		return new Address([
			'id'      => $data->get('id'),
			'label'   => $label,
			'address' => $data->get('address'),
			'data'    => $data->toArray(),
		]);
	}

	/**
	 * Send transaction
	 *
	 * @param Wallet $wallet
	 * @param string $address
	 * @param int $amount
	 * @param $passphrase
	 * @return Transaction
	 * @throws AdapterException
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 * @throws \Exception
	 */
	public function send(Wallet $wallet, $address, $amount, $passphrase): Transaction
	{
		$this->bitgo->setWalletId($wallet->getId());
		$response = $this->bitgo->sendTransaction($address, $amount, $passphrase);

		if (!isset($response['transfer'])) {
			throw new AdapterException('Invalid transaction data!');
		}
		$data = collect($response['transfer']);

		return new Transaction([
			'id'            => $data->get('id'),
			'value'         => (float) $data->get('value', $data->get('valueString')),
			'hash'          => $data->get('txid'),
			'input'         => $this->parseAddress($data->get('inputs', [])),
			'output'        => $this->parseAddress($data->get('outputs', [])),
			'confirmations' => (int) $data->get('confirmations'),
			'type'          => $data->get('type'),
			'date'          => $data->get('date'),
		]);
	}

	/**
	 * Get wallet transaction by id
	 *
	 * @param Wallet $wallet
	 * @param $id
	 * @return Transaction
	 * @throws AdapterException
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 * @throws \Exception
	 */
	public function getWalletTransaction(Wallet $wallet, $id): Transaction
	{
		$this->bitgo->setWalletId($wallet->getId());
		$response = $this->bitgo->getWalletTransfer($id);
		$data = collect($response);

		return new Transaction([
			'id'            => $data->get('id'),
			'value'         => (float) $data->get('value', $data->get('valueString')),
			'hash'          => $data->get('txid'),
			'input'         => $this->parseAddress($data->get('inputs', [])),
			'output'        => $this->parseAddress($data->get('outputs', [])),
			'confirmations' => (int) $data->get('confirmations'),
			'type'          => $data->get('type'),
			'date'          => $data->get('date'),
		]);
	}

	/**
	 * Handle coin webhook and return the transaction data
	 *
	 * @param Wallet $wallet
	 * @param $payload
	 * @return Transaction|null
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 * @throws \Exception
	 */
	public function handleTransactionWebhook(Wallet $wallet, $payload): ?Transaction
	{
		$body = collect($payload);

		if ($body->get('type') !== "transfer") return null;
		if ($body->get('wallet') !== $wallet->getId()) return null;
		if (!$body->get('hash')) return null;

		$this->bitgo->setWalletId($body->get('wallet'));
		$response = $this->bitgo->getWalletTransfer($body->get('hash'));
		$data = collect($response);

		return new Transaction([
			'id'            => $data->get('id'),
			'value'         => (float) $data->get('value', $data->get('valueString')),
			'hash'          => $data->get('txid'),
			'input'         => $this->parseAddress($data->get('inputs', [])),
			'output'        => $this->parseAddress($data->get('outputs', [])),
			'confirmations' => (int) $data->get('confirmations'),
			'type'          => $data->get('type'),
			'date'          => $data->get('date'),
		]);
	}

	/**
	 * Parse addresses
	 *
	 * @param $address
	 * @return array|string
	 * @throws AdapterException
	 */
	protected function parseAddress($address)
	{
		if (!is_array($address)) {
			throw new AdapterException("Invalid address format.");
		} else {
			return collect($address)->map(function ($object) {
				if (!is_array($object)) {
					throw new AdapterException("Address is expected to be an array of objects.");
				}
				if (!isset($object['value']) && isset($object['valueString'])) {
					$object['value'] = (float) $object['valueString'];
				}
				if (!array_has($object, ['address', 'value'])) {
					throw new AdapterException("Objects should contain address, value pairs.");
				}
				return array_only($object, ['address', 'value']);
			})->toArray();
		}
	}


	/**
	 * Get the dollar price
	 *
	 * @return float
	 */
	public function getDollarPrice(): float
	{
		if (!isset($this->dollarPrice)) {
			$client = new Client([
				'base_uri' => 'https://min-api.cryptocompare.com/'
			]);

			$response = $client->get("data/price", [
				'query' => array_filter([
					'fsym'    => strtoupper($this->getIdentifier()),
					'tsyms'   => 'USD',
					'api_key' => config('cryptocompare.key'),
				])
			]);

			$price = json_decode($response->getBody(), true)['USD'];
			$this->dollarPrice = (float) $price;
		}
		return $this->dollarPrice;
	}

	/**
	 * Set transaction webhook url for wallet.
	 *
	 * @param Wallet $wallet
	 * @param int $minConfirmations
	 * @return void
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 * @throws \Exception
	 */
	public function setTransactionWebhook(Wallet $wallet, int $minConfirmations = 3)
	{
		$url = $this->transactionWebhookUrl();
		$this->bitgo->setWalletId($wallet->getId());
		if ($minConfirmations > 1) {
			$this->bitgo->addWalletWebhook($url, "transfer", 0);
			$this->bitgo->addWalletWebhook($url, "transfer", 1);
			$this->bitgo->addWalletWebhook($url, "transfer", $minConfirmations);
			$this->bitgo->addWalletWebhook($url, "transfer", $minConfirmations + 1);
		} else {
			$this->bitgo->addWalletWebhook($url, "transfer", 0);
			$this->bitgo->addWalletWebhook($url, "transfer", 1);
		}
	}

	/**
	 * Unset webhook for wallet.
	 *
	 * @param Wallet $wallet
	 * @return void
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 * @throws \Exception
	 */
	public function unsetTransactionWebhook(Wallet $wallet)
	{
		$this->bitgo->setWalletId($wallet->getId());
		$url = $this->transactionWebhookUrl();
		$this->bitgo->removeWalletWebhook($url, "transfer");
	}

	/**
	 * @return int
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 */
	public function getFeePerByteEstimate()
	{
		return ($this->bitgo->feeEstimate()['feePerKb'] / 1000);
	}

	/**
	 * Calculate the next transaction fee
	 *
	 * @param int $inputs The total number of unspent receive address.
	 * A receive address is unspent if there has not been any sent transaction since
	 * the last received transaction. Defaults to 1
	 *
	 * @param int $outputs The total number of output address. Defaults to 1
	 * @param int $amount The amount in base unit.
	 * @return float
	 * @throws \GuzzleHttp\Exception\GuzzleException
	 */
	public function calcTransactionFee(int $inputs, int $outputs, $amount = 0): float
	{
		$feePerByte = $this->getFeePerByteEstimate();
		$bitgoFee = config('bitgo.fee_percent') * $amount;
		$multiplier = (($inputs * 180) + (($outputs + 1) * 50) + 50 + $inputs);
		return ($feePerByte * $multiplier) + $bitgoFee;
	}

	/**
	 * Get minimum transferable amount in base unit.
	 *
	 * @return int
	 */
	public function getMinimumTransferable()
	{
		return 3000;
	}

	/**
	 * Get maximum transferable amount in base unit.
	 *
	 * @return int
	 */
	public function getMaximumTransferable()
	{
		return 1000 * $this->getBaseUnit();
	}
}
