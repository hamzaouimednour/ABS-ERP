<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Hash;

/**
 * @property integer $id
 * @property int $auth_level
 * @property string $nom
 * @property string $prenom
 * @property string $deuxieme_prenom
 * @property string $email
 * @property string $country_code
 * @property int $dialling_code
 * @property string $telephone_mobile
 * @property string $telephone
 * @property string $login
 * @property string $password
 * @property boolean $status
 * @property string $photo
 * @property string $log_activity
 * @property string $email_verified_at
 * @property string $remember_token
 * @property string $created_at
 * @property string $updated_at
 * @property Authority $authority
 * @property Entreprise[] $entreprises
 * @property Entreprise[] $entreprises
 */
class User extends Authenticatable
{
    use HasFactory;
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
        'id',
        'auth_level',
        'nom',
        'prenom',
        'deuxieme_prenom',
        'email',
        'country_code',
        'dialling_code',
        'telephone_mobile', 
        'telephone',
        'login',
        'password',
        'status',
        'photo',
        'log_activity',
        'email_verified_at',
        'remember_token',
        'created_at',
        'updated_at'
    ];
    
    /**
     * Scope a query to only include active users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }    

    /**
     * scopeSubAuthLevel
     *
     * @param  mixed $query
     * @param  mixed $auth_level
     * @return void
     */
    public function scopeSubAuthLevel($query, $auth_level = null)
    {
        $authLevel = $auth_level ?? auth()->user()->auth_level;
        return $query->where('auth_level', '>=', $authLevel);
    }
    
    /**
     * getFullName
     *
     * @return string
     */
    public function getFullName(): string
    {
        return Str::title($this->prenom . '. ' . $this->nom);
    }

    /**
     * setPasswordAttribute
     *
     * @param  mixed $input
     * @return void
     */
    public function setPasswordAttribute($input)
    {
        if ($input) {
            $this->attributes['password'] = Hash::needsRehash($input) ? Hash::make($input) : $input;
        }
    }

    public function getCreatedAtAttribute($value)
    {
        return ucfirst($value);
    }

    public function getAuthority()
    {
        return Str::title(optional($this->authority()->first())->name);
    }
    

    /**
     * isWebmaster
     *
     * @return bool
     */
    public function isWebmaster(): bool
    {
        return $this->authority()->where('slug', 'webmaster')->exists();
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function authority()
    {
        return $this->belongsTo('App\Models\Authority', 'auth_level', 'level');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function entreprises()
    {
        return $this->hasMany('App\Models\Entreprise', 'uid');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userPermissionGroups()
    {
        return $this->hasMany('App\Models\PermissionGroupUser', 'uid');
    }

    protected function serializeDate($date)
    {
        return $date->format(config('custom.tn_datetime_format'));
    }
}
