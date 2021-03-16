<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    //
    //function register()
    function register(Request $req)
    {
        $user= new User;
        $user->firstname= $req->input('firstname');
        $user->lastname= $req->input('lastname');
        $user->email= $req->input('email');
        $user->save();
        //return $req->input();
        return $user;
    }
}
