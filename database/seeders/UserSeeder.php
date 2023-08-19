<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'auth_level'        => 1,
                'nom'               => 'Abs',
                'prenom'            => 'Administrator',
                'login'             => 'abs_administrator',
                'password'          => bcrypt('absabs'),
                'email_verified_at' => now()->format(config('custom.datetime_format')),
                'created_at'        => now()->format(config('custom.datetime_format')),
                'updated_at'        => now()->format(config('custom.datetime_format'))
            ],
        ]);
    }
}
