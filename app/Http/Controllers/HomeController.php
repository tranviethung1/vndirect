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

    public function support()
    {
        return view('web.support');
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

    public function storeContactForm(Request $request)
    {
        $input = $request->all();
		$user = new User;
    	$user->name = $request->username;
    	$user->email = $request->email;
    	$user->phone = $request->phone;
        $user->description = $request->message;
        $user->password = bcrypt($request->phone);
    	$user->save();
	//  Send mail to admin
        \Mail::send('contactMail', array(
            'name' => $input['name'],
            'email' => $input['email'],
			'phone' => $input['phone'],
            'subject' => $input['subject'],
            'message' => $input['message'],
        ), function($message) use ($request){
            $message->from($request->email);
            $message->to('info@unitymediavn.com', 'Admin')->subject($request->get('subject'));
        });

        return "Contact Form Submit Successfully";
    }
}
