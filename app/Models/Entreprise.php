<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $uid
 * @property integer $created_by
 * @property string $name
 * @property string $description
 * @property string $phone
 * @property int $user_licenses
 * @property int $component_licenses
 * @property boolean $status
 * @property string $created_at
 * @property string $updated_at
 * @property User $user
 * @property User $user
 * @property EntrepriseLicense[] $entrepriseLicenses
 * @property Tenant[] $tenants
 */
class Entreprise extends Model
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
        'uid',
        'name',
        'description',
        'phone',
        'address',
        'email',
        'user_licenses',
        'component_licenses',
        'logo',
        'status',
        'created_at',
        'updated_at'
    ];

    public function tenantToArray()
    {
        return [
            'id' => optional($this->tenant)->id ?? '-',
            'domain' => optional($this->domain)->domain ?? '-',
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'uid');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function entrepriseLicenses()
    {
        return $this->hasMany(EntrepriseLicense::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tenant()
    {
        return $this->hasOne(Tenant::class);
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\hasManyThrough
     */
    public function domain()
    {
        return $this->hasOneThrough(
            Domain::class,
            Tenant::class,
            'entreprise_id',
            'tenant_id',
            'id',
            'id'
        );
    }

    protected function serializeDate($date)
    {
        return $date->format(config('custom.tn_datetime_format'));
    }
}
