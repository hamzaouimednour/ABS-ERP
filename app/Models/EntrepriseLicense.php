<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property integer $id
 * @property integer $entreprise_id
 * @property integer $component_id
 * @property string $slug
 * @property boolean $license_limited
 * @property string $license_start_date
 * @property string $license_end_date
 * @property int $status
 * @property string $created_at
 * @property string $updated_at
 * @property Component $component
 * @property Entreprise $entreprise
 * @property EntrepriseLicenseModule[] $entrepriseLicenseModules
 */
class EntrepriseLicense extends Model
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
        'entreprise_id',
        'component_id',
        'slug',
        'license_limited',
        'license_start_date',
        'license_end_date',
        'status',
        'created_at',
        'updated_at'
    ];
    
    /**
     * Date mutators
     *
     * @param  mixed $date
     * @return void
     */
    public function setLicenseStartDateAttribute($date)
    {
        if($date){
            $this->attributes['license_start_date'] = Carbon::createFromFormat(config('custom.tn_datetime_format'), $date)->format(config('custom.datetime_format'));
        }
    }
    public function setLicenseEndDateAttribute($date)
    {
        if($date){
            $this->attributes['license_end_date'] = Carbon::createFromFormat(config('custom.tn_datetime_format'), $date)->format(config('custom.datetime_format'));
        }
    }
    public function getLicenseStartDateAttribute($date)
    {
        if($date){
            return Carbon::createFromFormat(config('custom.datetime_format'), $date)->format(config('custom.tn_datetime_format'));
        }
    }
    public function getLicenseEndDateAttribute($date)
    {
        if($date){
            return Carbon::createFromFormat(config('custom.datetime_format'), $date)->format(config('custom.tn_datetime_format'));
        }
    }

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
    public function entreprise()
    {
        return $this->belongsTo('App\Models\Entreprise');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function entrepriseLicenseModules()
    {
        return $this->hasMany('App\Models\EntrepriseLicenseModule');
    }

    protected function serializeDate($date)
    {
        return $date->format(config('custom.tn_datetime_format'));
    }
}
