<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property boolean $status
 * @property string $created_at
 * @property string $updated_at
 * @property PermissionGroupModule[] $permissionGroupModules
 * @property PermissionGroupUser[] $permissionGroupUsers
 */
class PermissionGroup extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['name', 'status', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function permissionGroupModules()
    {
        return $this->hasMany('App\Models\PermissionGroupModule');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function permissionGroupUsers()
    {
        return $this->hasMany('App\Models\PermissionGroupUser');
    }
    
    protected function serializeDate($date)
    {
        return $date->format(config('custom.tn_datetime_format'));
    }
}
