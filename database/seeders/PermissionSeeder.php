<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::insert([
            [
                'name'          => 'Accès',
                'description'   => 'Autoriser l\'accès complet à un module',
                'slug'          => 'access',
                'short_slug'    => 'm_a',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Accès restreint',
                'description'   => 'Autoriser l\'accès à certaines parties d’un module',
                'slug'          => 'restricted_access',
                'short_slug'    => 'm_ra',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Affichage',
                'description'   => 'Autoriser l\'affichage des données d\'un module',
                'slug'          => 'view',
                'short_slug'    => 'm_d_v',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Affichage restreint',
                'description'   => 'Autoriser l\'affichage de certaines parties d\'un module',
                'slug'          => 'restricted_view',
                'short_slug'    => 'm_d_rv',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Creation',
                'description'   => 'Autoriser la creation des données d\'un module',
                'slug'          => 'create',
                'short_slug'    => 'm_d_c',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Creation restreint',
                'description'   => 'Autoriser la creation de certaines parties d\'un module',
                'slug'          => 'restricted_create',
                'short_slug'    => 'm_d_rc',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Modification',
                'description'   => 'Autoriser la modification complète des données d’un module',
                'slug'          => 'edit',
                'short_slug'    => 'm_d_e',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Modification restreint',
                'description'   => 'Autoriser la modification de certaines parties d’un module',
                'slug'          => 'restricted_edit',
                'short_slug'    => 'm_d_re',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Suppression',
                'description'   => 'Autoriser la suppression des données d\'un module',
                'slug'          => 'delete',
                'short_slug'    => 'm_d_d',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Suppression autorisée',
                'description'   => 'Suppression avec autorisation des données d\'un module',
                'slug'          => 'restricted_delete',
                'short_slug'    => 'm_d_rd',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
            [
                'name'          => 'Impression',
                'description'   => 'Autoriser l\'impression des données d\'un module',
                'slug'          => 'print',
                'short_slug'    => 'm_d_p',
                'created_at'    => now()->format(config('custom.datetime_format')),
                'updated_at'    => now()->format(config('custom.datetime_format'))
            ],
        ]);
    }
}
