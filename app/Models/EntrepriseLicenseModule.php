<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $entreprise_license_id
 * @property integer $component_module_id
 * @property string $permissions
 * @property boolean $status
 * @property string $created_at
 * @property string $updated_at
 * @property ComponentModule $componentModule
 * @property EntrepriseLicense $entrepriseLicense
 */
class EntrepriseLicenseModule extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';

    protected $casts = [
        'permissions' => 'array',
    ];
    
    /**
     * @var array
     */
    protected $fillable = [
        'entreprise_license_id',
        'component_module_id',
        'permissions',
        'status',
        'created_at',
        'updated_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function componentModule()
    {
        return $this->belongsTo('App\Models\ComponentModule');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function entrepriseLicense()
    {
        return $this->belongsTo('App\Models\EntrepriseLicense');
    }
}
