<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $permission_group_id
 * @property integer $uid
 * @property boolean $status
 * @property string $created_at
 * @property string $updated_at
 * @property PermissionGroup $permissionGroup
 * @property User $user
 */
class PermissionGroupUser extends Model
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
    protected $fillable = ['permission_group_id', 'uid', 'status', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function permissionGroup()
    {
        return $this->belongsTo('App\Models\PermissionGroup');
    }
    public function permissionGroupModules()
    {
        return $this->hasMany('App\Models\PermissionGroupModule', 'permission_group_id', 'permission_group_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'uid');
    }
}
