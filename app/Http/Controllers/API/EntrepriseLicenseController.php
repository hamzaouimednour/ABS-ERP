<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Resources\EntrepriseLicenseResource;
use App\Http\Requests\EntrepriseLicenseRequest;
use App\Models\EntrepriseLicense;
use App\Models\EntrepriseLicenseModule;
use DataTables;

class EntrepriseLicenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $licenses = [];
        
        if ($request->ajax()) {

            if(auth()->user()->isWebmaster()){

                $licenses = EntrepriseLicense::get();

                if($request->has('list')){
                    return EntrepriseLicenseResource::collection($licenses);
                }

                return Datatables::of( EntrepriseLicenseResource::collection($licenses) )
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
    public function store(EntrepriseLicenseRequest $request)
    {
        $validated = $request->validated();
        data_set($validated, 'slug', gen_ehash(uniqid()));
        $license = EntrepriseLicense::create($validated);

        $modulePermissions = array_filter($request->permissions);
        $entrepriseLicenseModules = [];
        foreach ($modulePermissions as $module => $permissions) {
            array_push($entrepriseLicenseModules, [
                'entreprise_license_id' => $license->id,
                'component_module_id' => $module,
                'permissions' => json_encode($permissions),
                'status' => 1,
                'created_at' => now()
            ]);
        }
        EntrepriseLicenseModule::insert($entrepriseLicenseModules);

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
        return new EntrepriseLicenseResource(EntrepriseLicense::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EntrepriseLicenseRequest $request, $id)
    {
        $license = EntrepriseLicense::findOrFail($id);
        if(is_a($license, EntrepriseLicense::class)){

            $license->update($request->validated());

            $modulePermissions = array_filter($request->permissions);
            $entrepriseLicenseModules = [];
            foreach ($modulePermissions as $module => $permissions) {
                array_push($entrepriseLicenseModules, [
                    'entreprise_license_id' => $license->id,
                    'component_module_id' => $module,
                    'permissions' => json_encode($permissions),
                    'status' => 1,
                    'created_at' => now()
                ]);
            }
            EntrepriseLicenseModule::where('entreprise_license_id', $license->id)->delete();
            EntrepriseLicenseModule::insert($entrepriseLicenseModules);

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
        if($item = EntrepriseLicense::find($id)){
            if($item->delete())
                return response(null, Response::HTTP_NO_CONTENT); // 204
            return response(null, Response::HTTP_CONFLICT); // 409
        }else return response(null, Response::HTTP_FORBIDDEN); // 403
    }
}
