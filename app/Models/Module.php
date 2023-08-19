<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $slug
 * @property string $controller
 * @property string $permissions
 * @property string $description
 * @property boolean $status
 * @property string $created_at
 * @property string $updated_at
 * @property ComponentModule[] $componentModules
 */
class Module extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'permissions' => 'array',
    ];

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'controller',
        'permissions',
        'description',
        'status',
        'created_at',
        'updated_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function componentModules()
    {
        return $this->hasMany('App\Models\ComponentModule');
    }
    
    protected function serializeDate($date)
    {
        return $date->format(config('custom.tn_datetime_format'));
    }
}
