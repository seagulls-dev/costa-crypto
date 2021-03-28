<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 * @throws \PragmaRX\Google2FA\Exceptions\IncompatibleWithGoogleAuthenticatorException
	 * @throws \PragmaRX\Google2FA\Exceptions\InvalidCharactersException
	 */
	public function run()
	{
//		if(env('LIVE_PREVIEW', false)){
//			$user = User::firstOrCreate([
//				'email'    => 'SuperAdmin@mail.com',
//				'name'     => 'SuperAdmin',
//			], [
//				'password' => bcrypt(12345678),
//			]);
//			$role = config('permission.super_admin_role');
//			$user->assignRole($role);
//		}
	}
}
