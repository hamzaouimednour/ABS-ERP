<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $component_id
 * @property integer $module_id
 * @property string $permissions
 * @property boolean $status
 * @property string $created_at
 * @property string $updated_at
 * @property Component $component
 * @property Module $module
 */
class ComponentModule extends Model
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
        'component_id',
        'module_id',
        'permissions',
        'status',
        'created_at',
        'updated_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function component()
    {
        return $this->belongsTo('App\Models\Component');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function module()
    {
        return $this->belongsTo('App\Models\Module');
    }
    
    public function moduleToArray()
    {
        return $this->module->only(['name', 'description']);
    }
    
    public function permissionsToArray()
    {
        return Permission::whereIn('slug', $this->permissions)->get([
            'id',
            'name',
            'description',
            'slug'
        ]);
    }
    

    protected function serializeDate($date)
    {
        return $date->format(config('custom.tn_datetime_format'));
    }
}
