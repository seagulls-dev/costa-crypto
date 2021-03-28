<?php

namespace App\Notifications\Verification;

use App\Notifications\Notifier;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class EmailVerificationToken extends Notification
{
	use Queueable, Notifier;

	public $disableSmsChannel = true;
	public $disableDatabaseChannel = true;

	/**
	 * @var string
	 */
	protected $name = 'email_verification_token';

	/**
	 * Default database message attributes
	 *
	 * @var array
	 */
	protected $emailMessage = [
		'subject' => 'Verification Code: {code}',
		'body'    => '{code} is your verification code. It expires in {minutes} minutes.'
	];

	/**
	 * @var int
	 */
	protected $code;

	/**
	 * Create a new notification instance.
	 *
	 * @param $code
	 * @throws \Throwable
	 */
	public function __construct($code = null)
	{
		$this->code = $code;
	}

	/**
	 *  Replacement Parameters and Values
	 *
	 * @param $notifiable
	 * @return array
	 */
	public function parameters($notifiable)
	{
		return [
			'app_name'  => config('app.name'),
			'minutes'   => config('auth.token_expires_in'),
			'code'      => $this->code,
			'user_name' => $notifiable->name,
		];
	}

	/**
	 * Get parameter names
	 *
	 * @return array
	 */
	public function parameterNames()
	{
		return [
			'app_name'  => trans('notification.parameters.app_name'),
			'code'      => trans('notification.parameters.code'),
			'minutes'   => trans('notification.parameters.minutes'),
			'user_name' => trans('notification.parameters.user_name')
		];
	}
}
