<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\PermissionRequest;
use App\Http\Resources\PermissionResource;
use App\Models\Permission;
use App\Models\PermissionGroup;
use App\Models\PermissionGroupModule;
use App\Models\PermissionGroupUser;
use DataTables;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $groups = [];
        
        if ($request->ajax()) {

            if(auth()->user()->isWebmaster()){

                if($request->has('gates')){
                    return Permission::get(['id', 'name', 'description', 'slug']);
                }

                $groups = PermissionGroup::get();

                if($request->has('list')){
                    return PermissionResource::collection($groups);
                }

                return Datatables::of( PermissionResource::collection($groups) )
                    ->addIndexColumn()
                    ->addColumn('actions', function($row){
                        $actionsHTML = '<div class="dt-actions" data-id="'.$row["id"].'">
                        <button class="btn btn-sm btn-radius btn-gray-light badge btn-users" type="button"><i class="fe fe-users"></i> utilisateurs</button>
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
    public function store(PermissionRequest $request)
    {
        $group = PermissionGroup::create($request->validated());

        $permissionGroupModules = $this->permissionGroupModules($request->permissions, $group->id);
        PermissionGroupModule::insert($permissionGroupModules);

        return response()->json([], Response::HTTP_CREATED);
    }

    /**
     * Save users to specific group of permissions
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function users(Request $request, $id)
    {
        if($request->isMethod('GET')){
            return PermissionGroup::findOrFail($id)->permissionGroupUsers->pluck(['uid']);
        }

        if($request->isMethod('POST')){
            $permissionGroup = PermissionGroup::findOrFail($id);
            $request->validate([
                'users' => 'required|array'
            ]);
            $permissionGroupUsers = [];
            foreach ($request->users as $uid) {
               array_push($permissionGroupUsers, [
                   'permission_group_id' => $permissionGroup->id,
                   'uid' => $uid,
                   'status' => 1,
                   'created_at' => now()
               ]);
            }
            PermissionGroupUser::where('permission_group_id', $permissionGroup->id)->delete();
            PermissionGroupUser::insert($permissionGroupUsers);

            return response()->json([], Response::HTTP_CREATED);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new PermissionResource(PermissionGroup::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PermissionRequest $request, $id)
    {
        $group = PermissionGroup::find($id);
        if(is_a($group, PermissionGroup::class)){
            $group->update($request->validated());

            $permissionGroupModules = $this->permissionGroupModules($request->permissions, $group->id);
            PermissionGroupModule::where('permission_group_id', $group->id)->delete();
            PermissionGroupModule::insert($permissionGroupModules);

            return response()->json([], Response::HTTP_CREATED);
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
        if($item = PermissionGroup::find($id)){
            if($item->delete())
                return response(null, Response::HTTP_NO_CONTENT); // 204
            return response(null, Response::HTTP_CONFLICT); // 409
        }else return response(null, Response::HTTP_FORBIDDEN); // 403
    }
    
    /**
     *  format an array of permissionGroupModules to insert later.
     *
     * @param  mixed $permissions
     * @param  mixed $permissionGroupId
     * @return void
     */
    public function permissionGroupModules($permissions, $permissionGroupId){
        $permissionComponentModules = [];
        foreach ($permissions as $componentModulePermission) {
            list($componentModuleId, $permission) = explode('.', $componentModulePermission);
            if(!array_key_exists($componentModuleId, $permissionComponentModules))
                $permissionComponentModules[$componentModuleId] = [];
            array_push($permissionComponentModules[$componentModuleId], $permission);
        }

        $permissionGroupModules = [];
        foreach ($permissionComponentModules as $key => $permissions) {
            array_push($permissionGroupModules, [
                'permission_group_id' => $permissionGroupId,
                'component_module_id' => intval($key),
                'permissions' => json_encode($permissions),
                'status' => 1,
            ]);
        }

        return $permissionGroupModules;
    }
}
