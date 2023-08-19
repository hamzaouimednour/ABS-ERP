<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property string $slug
 * @property int $level
 * @property string $created_at
 * @property string $updated_at
 * @property User[] $users
 */
class Authority extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'authority';

    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'slug',
        'level',
        'created_at',
        'updated_at'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany('App\Models\User', 'auth_level', 'level');
    }
}
