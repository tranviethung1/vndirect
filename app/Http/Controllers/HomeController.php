<?php

namespace App\Http\Controllers;

use App\GeneralSetting;
use App\LibraryMusic;
use App\Radio;
use App\Work;
use Illuminate\Http\Request;
use App\User;

class HomeController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        return view('web.index');
    }

    public function register(Request $request)
    {
        $user = new User;
    	$user->name = $request->username;
    	$user->email = $request->email;
    	$user->phone = $request->phone;
        $user->password = bcrypt($request->phone);
        $user->role = 0;
    	$user->save();
        return 1;
    }

    public function allParam($name)
    {
        return view('web.index');
    }

    public function allParam1($category, $name)
    {
        return view('web.'. $category . '.index');
    }

    public function allParam2($category, $name, $category2)
    {
        return view('web.'. $category . '.' . $name. '.index');
    }

    public function allParam3($category, $name, $category2, $fileName)
    {
        return view('web.'. $category . '.' . $name. '.' . $category2 . '.index');
    }

    public function allParam4($category, $name, $category2, $category3, $fileName)
    {
        return view('web.'. $category . '.' . $name. '.' . $category2 . '.' . $category3 . '.index');
    }

    public function contact()
    {
        return view('web.contact');
    }
}
