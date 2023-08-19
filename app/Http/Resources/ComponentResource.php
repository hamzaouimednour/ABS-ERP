<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Permission;
use Illuminate\Support\Arr;

class ComponentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // makeHidden() or only()
        $exceptions = Arr::except(parent::toArray($request), [
            'created_at',
            // 'updated_at',
        ]);
        return Arr::collapse([$exceptions,
                [
                    'modules' => optional($this->componentModules)->each(function ($item, $key) {
                        $item->name = $item->module->name;
                        $item->description = $item->module->description;
                        $item->permissions_data = $item->permissionsToArray($item->permissions);
                        // calling module relation, includes it in returned data
                    })->makeHidden([
                        'component_id',
                        'updated_at',
                        'created_at',
                        'module'
                    ])
                ]
        ]);
    }
}
