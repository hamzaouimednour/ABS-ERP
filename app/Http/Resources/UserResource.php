<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return Arr::except(parent::toArray($request), [
            'password',
            'log_activity',
            'email_verified_at',
            'remember_token',
            'updated_at',
            // 'created_at',
        ]);
    }
}
