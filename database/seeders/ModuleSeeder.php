<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Module;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // permissions field is casted into json
        Module::insert([
            [
                'name'          => 'Utilisateurs',
                'slug'          => 'users',
                'controller'    => 'user',
                'permissions'   => json_encode([
                    'access',
                    'view',
                    'create',
                    'edit',
                    'delete',
                ]),
                'description'   => 'Gère les utilisateurs',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Entreprises',
                'slug'          => 'entreprises',
                'controller'    => 'entreprise',
                'permissions'   => json_encode([
                    'access',
                    'view',
                    'create',
                    'edit',
                    'delete',
                ]),
                'description'   => 'Gère les entreprise',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Permissions des utilisateurs',
                'slug'          => 'permissions',
                'controller'    => '',
                'permissions'   => json_encode([
                    'access',
                    'view',
                    'create',
                    'edit',
                    'delete',
                ]),
                'description'   => 'Gère les autorisations des utilisateurs',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
        ]);
    }
}
