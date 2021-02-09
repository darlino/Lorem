<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/liyeplimall', function (){
    return view('liyeplimall');
});

Route::get('/simbcoin', function (){
    return view('simbcoin');
});
Route::get('/limarket', function (){
    return view('limarket');
});