<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Resources\UserResource;
use App\Http\Requests\UserRequest;
use App\Models\User;
use DataTables;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = [];
        
        if ($request->ajax()) {

            if(auth()->user()->isWebmaster()){

                if( $request->has('list') ){
                    return User::subAuthLevel()->active()->get([
                        'id', 'nom', 'prenom', 'login'
                    ]);
                }

                if( $request->has('auth_lvl') ){
                    return User::where('auth_level', $request->auth_lvl)->active()->get([
                        'id', 'nom', 'prenom', 'login'
                    ]);
                }

                $users = User::get();
                return Datatables::of( UserResource::collection($users) )
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
    public function store(UserRequest $request)
    {
        // $request->merge([
        //     'password' => bcrypt($request->password)
        // ]);
        User::create($request->validated());

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
        return new UserResource(User::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
        $user = User::find($id);

        if($user){
            $user->update($request->validated());
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
        if($item = User::find($id)){
            if($item->delete())
                return response(null, Response::HTTP_NO_CONTENT); // 204
            return response(null, Response::HTTP_CONFLICT); // 409
        }else return response(null, Response::HTTP_FORBIDDEN); // 403
    }
}
