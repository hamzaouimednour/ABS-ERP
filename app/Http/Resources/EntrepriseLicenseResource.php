<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Arr;

class EntrepriseLicenseResource extends JsonResource
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
            'created_at',
            'updated_at',
        ]);
        return Arr::collapse([$exceptions,
                [
                    'entreprise' => optional($this->entreprise)->name,
                    'manager' => optional($this->entreprise)->user->login,
                    'component' => optional($this->component)->name,
                    'license_modules' => $this->entrepriseLicenseModules->makeHidden([
                        'id', 'entreprise_license_id', 'status', 'created_at', 'updated_at'
                    ]),
                ]
        ]);
    }
}
