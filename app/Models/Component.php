<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $slug
 * @property string $description
 * @property boolean $status
 * @property string $created_at
 * @property string $updated_at
 * @property ComponentModule[] $componentModules
 * @property EntrepriseLicense[] $entrepriseLicenses
 */
class Component extends Model
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
    protected $fillable = [
        'name',
        'slug',
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function entrepriseLicenses()
    {
        return $this->hasMany('App\Models\EntrepriseLicense');
    }

    protected function serializeDate($date)
    {
        return $date->format(config('custom.tn_datetime_format'));
    }
}
