<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\InitializeTenancyBySubdomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyBySubdomain::class,
    PreventAccessFromCentralDomains::class
])->group(function () {
    Route::get('test', function () {
        echo 'Tenant.php';
        dd(request()->variable);
        // dd(\DB::connection());
    });

    // Auth routes
    Route::get('login', function () {
        return auth()->check() ? redirect('/auth/home') : view('app.login');
    })->name('login');
    Route::get('logout', [Api\AuthController::class, 'logout']);

    // authority space
    Route::view('auth/{any?}', 'app.auth')->where('any', '.*')->middleware('auth:web');

    // app
    Route::view('{any?}', 'app.main')->where('any', '.*');
});
