<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatMessageText extends Model
{
	/**
	 * The attributes that aren't mass assignable.
	 *
	 * @var array
	 */
	protected $guarded = [];

	/**
	 * Set the body.
	 *
	 * @param  string  $value
	 * @return void
	 */
	public function setBodyAttribute($value)
	{
		$this->attributes['body'] = clean($value);
	}

	public function message()
	{
		return $this->belongsTo(ChatMessage::class, 'message_id', 'id');
	}
}
