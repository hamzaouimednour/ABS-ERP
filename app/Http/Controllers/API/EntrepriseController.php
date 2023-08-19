<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Requests\EntrepriseRequest;
use App\Http\Resources\EntrepriseResource;
use App\Http\Resources\DomainResource;
use App\Models\Entreprise;
use App\Models\Tenant;
use App\Models\User;
use DataTables;
use File;

class EntrepriseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $entreprises = [];
        
        if ($request->ajax()) {

            if(auth()->user()->isWebmaster()){

                $entreprises = Entreprise::get();
                return Datatables::of( EntrepriseResource::collection($entreprises) )
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
    public function store(EntrepriseRequest $request)
    {
        $entrepriseLogoName = null;
        $entrepriseDirectory = local_path(['assets', 'u', gen_ehash($request->tenant), 'images']);
        $validated = $request->validated();
        
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // mkdir entreprise directory
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        if(!File::isDirectory($entrepriseDirectory))
            if(!File::makeDirectory( $entrepriseDirectory, 0777, true ))
                return response()->json([__('validation-inline.directory_not_created')], Response::HTTP_UNPROCESSABLE_ENTITY);

        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // check & upload entreprise logo
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        if($request->hasFile('logo')){
            $request->validate([
                'logo' => 'image|mimes:png,jpg,jpeg,gif|max:1024'
            ]);
            $entrepriseLogoName = gen_fname(
                $request->file('logo')->getClientOriginalName(),
                $request->file('logo')->getClientOriginalExtension()
            );
            if(!$request->file('logo')->move($entrepriseDirectory, $entrepriseLogoName)){
                return response()->json([__('validation-inline.not_uploaded')], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            data_set($validated, 'logo', $entrepriseLogoName);
        }

        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // save entreprise and tenant data
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $entreprise = Entreprise::create($validated);
        $tenant = Tenant::create([
            'id' => $request->tenant,
            'entreprise_id' => $entreprise->id
        ]);
        $tenant->createDomain(['domain' => $request->subdomain]); // $tenant->domains()->create();
        
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // migrate tenant data
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $tenantManager = User::find($request->uid)->getAttributes();
        if(is_array($tenantManager)){
            $tenant->run(function () use ($tenantManager, $entreprise){
                User::create($tenantManager);
                Entreprise::create($entreprise->getAttributes());
            });
        }
        
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
        return new EntrepriseResource(Entreprise::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EntrepriseRequest $request, $id)
    {
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // check, get and init entreprise data
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $entreprise = Entreprise::findOrFail($id);
        $entrepriseLogoName = null;
        $entrepriseDirectory = local_path(['assets', 'u', gen_ehash($request->tenant), 'images']);
        $validated = $request->validated();

        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // check & upload entreprise logo
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        if($request->hasFile('logo')){
            $request->validate([
                'logo' => 'image|mimes:png,jpg,jpeg,gif|max:1024'
            ]);
            $entrepriseLogoName = gen_fname(
                $request->file('logo')->getClientOriginalName(),
                $request->file('logo')->getClientOriginalExtension()
            );
            if(!$request->file('logo')->move($entrepriseDirectory, $entrepriseLogoName)){
                return response()->json([__('validation-inline.not_uploaded')], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            data_set($validated, 'logo', $entrepriseLogoName);
        }

        if($entreprise){

            #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // migrate tenant manager data changes
            #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if($entreprise->uid !== $request->uid){
                $tenantManager = User::find($request->uid)->getAttributes();
                var_dump($tenantManager);
                if(is_array($tenantManager)){
                    $entreprise->tenant->run(function () use ($tenantManager, $entreprise){
                        User::create($tenantManager);
                        // User::destroy($entreprise->uid);
                    });
                }
            }

            #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // update Entreprise data central and tenant
            #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            $entreprise->update($request->validated());
            $entreprise->domain->update([ 'domain' => $request->subdomain ]);
            $entreprise->tenant->run(function () use ($entreprise){
                Entreprise::find($entreprise->id)->update($entreprise->getAttributes());
            });

            return response()->json([], Response::HTTP_ACCEPTED);
        
        }
        return response()->json(
            ["Désolé ! Vous n'êtes pas autorisé(e) à effectuer cette action."],
            Response::HTTP_UNPROCESSABLE_ENTITY
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if($entreprise = Entreprise::findOrFail($id)){
            if ($entreprise->tenant){
                $entreprise->tenant->delete();
                # OR
                # $tenantDBManager = new \Stancl\Tenancy\TenantDatabaseManagers\MySQLDatabaseManager;
                # $tenantDBManager->setConnection(config('database.default'));
                # $tenantDBManager->deleteDatabase($entreprise->tenant);
            }
            if($entreprise->delete()) return response(null, Response::HTTP_NO_CONTENT); // 204
            else return response(null, Response::HTTP_CONFLICT); // 409
        }else return response(null, Response::HTTP_FORBIDDEN); // 403
    }
}
