<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthApi extends Controller
{
    //
    function login(Request $request)
    {
        return $request->input();
    }
}
