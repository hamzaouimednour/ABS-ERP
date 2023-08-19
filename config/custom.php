<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Custom Settings
    |--------------------------------------------------------------------------
    |
    | This options are custom to use in this project, just call them by config()
    | so we dont have to write them manually and in case we change them this will
    | be more easily.
    |
    */

    'company'                => 'ABS Computer',
    
    'date_format'            => 'Y-m-d',
    'time_format'            => 'H:i:s',
    'datetime_format'        => 'Y-m-d H:i:s',
    
    'tn_date_format'         => 'd/m/Y',
    'tn_time_format'         => 'H:i:s',
    'tn_datetime_format'     => 'd/m/Y H:i:s',

    'moment_date_format'     => 'YYYY-MM-DD',
    'moment_time_format'     => 'HH:mm:ss',
    'moment_datetime_format' => 'YYYY-MM-DD HH:mm:ss',
    
    'status' => [
        'Suspendu',
        'Actif',
        'Verrouillé'
    ],

    'authority' => [
        'Aucun',
        'Webmaster',
        'Manager',
        'Modérateur',
        'Utilisateur tiers'
    ]

];