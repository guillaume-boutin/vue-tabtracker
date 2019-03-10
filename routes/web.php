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

Route::group(['middleware' => 'web', 'prefix' => 'ajax'], function () {
    Route::get('me', 'UserController@ping')->middleware('auth');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('login', 'Auth\LoginController@login');
    Route::post('logout', 'Auth\LoginController@logout');
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
