<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //
    public function index(){
        $users = User::where('id', '!=', 1)->paginate(15);
    	return view('admin.dashboard.home', ['users' => $users]);
    }

    public function edit($id){
        $user = User::where('id', $id)->first();
    	return view('admin.user.sua', ['user' => $user]);
    }

    public function update($id, Request $request){
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->description = $request->description;
        $user->status = $request->status;
        $user->save();
        return redirect('admin')->with('message', 'Cập nhật thành công!');
    }

    public function delete($id){
        $user = User::find($id);
        $user->delete($id);
        return 1;
    }
    
}
