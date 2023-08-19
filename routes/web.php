<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth routes
Route::get('login', function () {
    if(auth()->check()) return redirect('/auth/home');
    return view('app.login');
})->name('login');
Route::get('logout', [Api\AuthController::class, 'logout']);

// authority space
Route::view('auth/{any?}', 'app.auth')->where('any', '.*')->middleware('auth:web');

// app
Route::view('{any?}', 'app.main')->where('any', '.*');
