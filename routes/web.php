<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Basic route for the test landing page.
|
*/

Route::get('/', function () {
    return view('index');
});

