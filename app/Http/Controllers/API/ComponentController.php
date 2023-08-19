<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Resources\ComponentResource;
use App\Http\Requests\ComponentRequest;
use App\Models\Component;
use App\Models\ComponentModule;
use DataTables;

class ComponentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $components = [];
        
        if ($request->ajax()) {

            if(auth()->user()->isWebmaster()){

                $components = Component::get();

                if($request->has('list')){
                    // return Component::get(['id', 'name', 'description', 'slug']);
                    return ComponentResource::collection($components);
                }

                return Datatables::of( ComponentResource::collection($components) )
                    ->addIndexColumn()
                    ->addColumn('actions', function($row){
                        $actionsHTML = '<div class="dt-actions" data-id="'.$row["id"].'">
                        <button class="btn btn-sm btn-radius btn-warning-light badge btn-edit" type="button"><i class="fe fe-edit-3"></i> modifier</button>
                        <button class="btn btn-sm btn-radius btn-danger-light badge btn-delete" type="button"><i class="fe fe-trash-2"></i> supprimer</button>
                        </div>';
                        return $actionsHTML;
                    })
                    ->rawColumns(['actions'])
                    ->make(true);
            } 
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ComponentRequest $request)
    {
        $component = Component::create($request->validated());
        $modulePermissions = array_filter($request->permissions);
        $componentModule = [];
        foreach ($modulePermissions as $module => $permissions) {
            array_push($componentModule, [
                'component_id' => $component->id,
                'module_id' => $module,
                'permissions' => json_encode($permissions),
                'status' => 1,
                'created_at' => now()
            ]);
        }
        ComponentModule::insert($componentModule);

        return response()->json([], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ComponentResource(Component::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ComponentRequest $request, $id)
    {
        // ::updateOrCreate()
        $component = Component::findOrFail($id);

        if(is_a($component, Component::class)){

            $component->update($request->validated());
            $modulePermissions = array_filter($request->permissions);
            // delete non exist  modules
            $componentModules = $component->componentModules->pluck(['module_id']);
            $componentModules->each(function($item) use($modulePermissions, $component){
                if(!in_array($item, array_keys($modulePermissions))){
                    optional($component->componentModules->where('module_id', $item)->first())->delete();
                }
            });
            foreach ($modulePermissions as $module => $permissions) {
                ComponentModule::updateOrCreate(
                    [
                        'component_id' => $component->id,
                        'module_id' => $module
                    ],
                    [
                        'permissions' => $permissions,
                        'status' => 1,
                        'created_at' => now()
                    ]
                );
            }

            /**
             * dont delete records and reinsert them cuz there are many others records depends on this.
             */
            // ComponentModule::where('component_id', $component->id)->delete();
            // ComponentModule::insert($componentModule);

            return response()->json([], Response::HTTP_ACCEPTED);
        }

        return response()->json(["Désolé ! Vous n'êtes pas autorisé(e) à effectuer cette action."], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if($item = Component::find($id)){
            if($item->delete())
                return response(null, Response::HTTP_NO_CONTENT); // 204
            return response(null, Response::HTTP_CONFLICT); // 409
        }else return response(null, Response::HTTP_FORBIDDEN); // 403
    }
}
