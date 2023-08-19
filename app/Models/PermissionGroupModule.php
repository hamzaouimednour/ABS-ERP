<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $permission_group_id
 * @property integer $component_module_id
 * @property string $permissions
 * @property boolean $status
 * @property string $created_at
 * @property string $updated_at
 * @property ComponentModule $componentModule
 * @property PermissionGroup $permissionGroup
 */
class PermissionGroupModule extends Model
{
    use \Znck\Eloquent\Traits\BelongsToThrough;

    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['permission_group_id', 'component_module_id', 'permissions', 'status', 'created_at', 'updated_at'];

    public function component()
    {
        return $this->belongsToThrough('App\Models\Component', 'App\Models\ComponentModule');
    }

    public function module()
    {
        return $this->belongsToThrough('App\Models\Module', 'App\Models\ComponentModule');
    }

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
    public function permissionGroup()
    {
        return $this->belongsTo('App\Models\PermissionGroup');
    }
}
