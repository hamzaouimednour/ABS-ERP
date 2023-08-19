<?php

namespace App\Http\Middleware;

use Closure;
use Gate;
use Str;
use Illuminate\Http\Request;
use App\Models\User;

class AuthGates
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        # check wether is it a Tenant
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // $request->path()
        if(tenant()){
            $tenantLicense = null;
            if(Str::startsWith($request->path(), 'auth/c/'))
                $tenantLicense = explode('/', $request->path())[2];

            $request->request->add([
                'tenant_license' => $tenantLicense
            ]);
        }
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        # define Webmaster gate
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Gate::define('webmaster', function (User $user) {
            return $user->isWebmaster();
        });
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        # get authenticated user permissions
        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        $authenticatedUser = User::find(2);//auth()->user();
        $permissionsArray = [];

        // get User permissions
        if(is_a($authenticatedUser, User::class)){
            // loop each group
            $authenticatedUser->userPermissionGroups->each(function($item) use(&$permissionsArray){
                // loop each module
                $item->permissionGroupModules->each(function($permissionGroupModule) use(&$permissionsArray){
                    // grab the authorized Component
                    $component = $permissionGroupModule->componentModule->component_id;
                    $componentSlug = $permissionGroupModule->component->slug;
                    // grab the authorized Module
                    $module = $permissionGroupModule->component_module_id;
                    $moduleController = ucfirst($permissionGroupModule->module->controller).'Controller';
                    // grab the authorized Permissions
                    $permissions = $permissionGroupModule->permissions;

                    // fill the permissionsArray [componentID => [ moduleID => permissions ] ]
                    if(!in_array($component, array_keys($permissionsArray))){
                        $permissionsArray[$component] = array();
                        $permissionsArray[$component]['slug'] = $componentSlug;
                        $permissionsArray[$component]['modules'] = array();
                    }
                    $permissionsArray[$component]['modules'][$module]['controller'] = $moduleController;
                    $permissionsArray[$component]['modules'][$module]['permissions'] = json_decode($permissions);
                });
            });
        }
        // dd(Gate::abilities());
        // dd($permissionsArray);
        return $next($request);
    }
}
