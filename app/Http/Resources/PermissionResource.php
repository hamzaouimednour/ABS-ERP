<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class PermissionResource extends JsonResource
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
            // 'updated_at',
        ]);
        return Arr::collapse([$exceptions,
                [
                    'rules' => optional($this->permissionGroupModules)->each(function($item, $key){
                        $item->component_id = optional($item->componentModule)->component_id;
                        // its append componentModule relation so hide it
                    })->makeHidden([
                        'permission_group_id',
                        'updated_at',
                        'created_at',
                        'componentModule',
                    ])
                ]
        ]);
    }
}
