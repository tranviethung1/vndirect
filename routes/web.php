<?php

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

Route::get('/', 'HomeController@index');
Route::get('/lien-he-trung-tam-ho-tro/index.html', 'HomeController@support');
Route::post('/support', 'HomeController@storeContactForm');

Route::get('admin/login','UserController@Login');
Route::post('admin/login','UserController@LoginAuth');
Route::get('admin/logout','UserController@Logout');
Route::group(['prefix' => 'admin','middleware' => 'adminAuth'],function(){
	Route::get('/','AdminController@index');
	Route::get('/edit/{id}','AdminController@edit');
	Route::post('/edit/{id}','AdminController@update');
	Route::delete('/user/delete/{id}','AdminController@delete');
});


Route::get('/contact', 'HomeController@contact');
Route::post('/contact', 'HomeController@register');
Route::get('/{fileName}', 'HomeController@allParam');
Route::get('/{category}/{fileName}', 'HomeController@allParam1');
Route::get('/{category}/{name}/{fileName}', 'HomeController@allParam2');
Route::get('/{category}/{name}/{category2}/{fileName}', 'HomeController@allParam3');
Route::get('/{category}/{name}/{category2}/{category3}/{fileName}', 'HomeController@allParam4');



