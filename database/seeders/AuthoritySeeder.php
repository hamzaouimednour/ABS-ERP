<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Authority;

class AuthoritySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Authority::insert([
            [
                'name'          => 'none',
                'description'   => "No role",
                'slug'          => 'none',
                'level'         => 0,
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name' => 'Webmaster',
                'description' => "",
                'slug' => 'webmaster',
                'level' => 1,
                'created_at' => now()->format(config('custom.datetime_format')),
                'updated_at' => now()->format(config('custom.datetime_format'))
            ],
            [
                'name' => 'Manager',
                'description' => "",
                'slug' => 'manager',
                'level' => 2,
                'created_at' => now()->format(config('custom.datetime_format')),
                'updated_at' => now()->format(config('custom.datetime_format'))
            ],
            [
                'name' => 'Moderator',
                'description' => "",
                'slug' => 'moderator',
                'level' => 3,
                'created_at' => now()->format(config('custom.datetime_format')),
                'updated_at' => now()->format(config('custom.datetime_format'))
            ],
            [
                'name' => 'User',
                'description' => "",
                'slug' => 'user',
                'level' => 4,
                'created_at' => now()->format(config('custom.datetime_format')),
                'updated_at' => now()->format(config('custom.datetime_format'))
            ]
        ]);
    }
}
