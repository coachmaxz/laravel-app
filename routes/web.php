<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HelloWorldController;

Route::get('/', function () { return view('welcome'); });
Route::get('/hello', [ HelloWorldController::class, 'index' ]);

Route::get('/vue', function () { return view('vue'); });