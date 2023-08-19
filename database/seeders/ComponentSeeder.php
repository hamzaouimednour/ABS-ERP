<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Component;

class ComponentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Component::insert([
            [
                'name'          => 'Tenant',
                'slug'          => 'tenant',
                'description'   => '',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'E-Commerce',
                'slug'          => 'e-commerce',
                'description'   => '',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Inventaire',
                'slug'          => 'inventory',
                'description'   => '',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
        ]);
    }
}
