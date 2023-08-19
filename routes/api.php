<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyBySubdomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware([
    'web',
    'universal',
    InitializeTenancyBySubdomain::class,
])->group(function () {

    Route::post('login', [Api\AuthController::class, 'login']);
    // \App\Providers\RouteServiceProvider:middleware:(web)
    Route::prefix('auth')->middleware('auth:web')->group(function () {
        Route::get('/', [Api\AuthController::class, 'check']);
        Route::get('authority', [Api\AuthorityController::class, 'index']);
        Route::get('permissions', [Api\PermissionController::class, 'index']);

        // ApiRersources
        Route::resource('users', Api\UserController::class)->only([
            'index', 'show', 'store', 'update', 'destroy'
        ]);
        Route::resource('entreprises', Api\EntrepriseController::class)->only([
            'index', 'show', 'store', 'update', 'destroy'
        ]);
        Route::resource('components', Api\ComponentController::class)->only([
            'index', 'show', 'store', 'update', 'destroy'
        ]);
        Route::resource('modules', Api\ModuleController::class)->only([
            'index', 'show', 'store', 'update', 'destroy'
        ]);
        Route::any('permissions/{id}/users', [Api\PermissionController::class, 'users'])->where('id', '[0-9]+');
        Route::resource('permissions', Api\PermissionController::class)->only([
            'index', 'show', 'store', 'update', 'destroy'
        ]);
        Route::resource('entreprises-licenses', Api\EntrepriseLicenseController::class)->only([
            'index', 'show', 'store', 'update', 'destroy'
        ]);
    });
});
