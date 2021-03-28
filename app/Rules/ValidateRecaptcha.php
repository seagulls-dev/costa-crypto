<?php

namespace App\Rules;

use GuzzleHttp\Client;
use Illuminate\Contracts\Validation\Rule;

class ValidateRecaptcha implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
	    $client = new Client([
		    'base_uri' => 'https://google.com/recaptcha/api/'
	    ]);

	    $response = $client->post('siteverify', [
		    'query' => [
			    'secret'   => config('recaptcha.secret'),
			    'response' => $value
		    ]
	    ]);

	    return json_decode($response->getBody())->success;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return trans('validation.recaptcha');
    }
}
