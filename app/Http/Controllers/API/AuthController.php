<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
// use Auth;

class AuthController extends Controller
{    
    /**
     * User Authentification
     *
     * @param  mixed $request
     * @return void
     */
    public function login(Request $request)
    {
        $credentials = Arr::add(request(['login', 'password']), 'status', 1);
        
        if (auth()->attempt($credentials, $request->remember)) {
            return response()->json([
                'message' => 'Bienvenue, vous serez redirigé redirigé vers votre espace.',
                'user' => new UserResource(auth()->user()),
                'redirect_to' => redirect()->intended('/auth/home')->getTargetUrl()
            ], Response::HTTP_OK);
        }

        return response()->json([ 'error' => __('auth.failed') ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
    
    /**
     * Check Authentification
     *
     * @param  mixed $request
     * @return void
     */
    public function check(Request $request)
    {
        if (auth()->check()){
            return response()->json([
                'user' => new UserResource(auth()->user()),
                'redirect_to' => redirect()->intended('/auth/home')->getTargetUrl()
            ], Response::HTTP_OK);
        }
        // $redirectTo = parse_url(redirect()->intended( $userHome )->getTargetUrl())['path'] ?? null;
        
        return response()->json([ 'error' => 'Unauthorized' ], Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }
}
