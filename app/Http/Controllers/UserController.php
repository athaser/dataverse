<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\UserController;

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
        $user->address= $req->input('address');
        $user->gender= $req->input('gender');
        $user->purpose= $req->input('purpose');
        $user->activities= $req->input('activities');
        $user->save();
        //return $req->input();
        return $user;
    }
}
