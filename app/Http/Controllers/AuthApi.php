<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AuthApi extends Controller
{
    //
    function login(Request $request)
    {
        //return DB::table('users')->latest('id')->first();
        //$user = User::where('id', $id)->latest('upload_time')->first;
       // $user = User::latest()->first()->id;
       $user = User::orderBy('id', 'DESC')->first();
        //return $req->input();
        return $user;
    }
}
