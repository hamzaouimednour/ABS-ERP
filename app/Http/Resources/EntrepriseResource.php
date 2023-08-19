<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class EntrepriseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $exceptions = Arr::except(parent::toArray($request), [
            'updated_at',
            // 'created_at',
        ]);
        return Arr::collapse([$exceptions,
                [
                    'manager' => $this->user->login,
                    'tenant' => $this->tenantToArray()
                ]
        ]);
    }
}
