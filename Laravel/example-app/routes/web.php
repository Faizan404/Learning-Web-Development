<?php

use App\Models\Listing;
use Illuminate\Http\Request;
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
    return view('listings', [
        "heading" => "All Listings",
        "listings" => Listing::all()
    ]);
});

Route::get('/listing/{id}', function ($id) {
    return view("listing", [
        "listing" => Listing::find($id)
    ]);
});

Route::get('/hello', function () {
    return response("Hello World!");
});
Route::get('/post/{id}', function ($id) {
    return response("POST " . $id);
});
Route::get('/post', function (Request $request) {
    // ddd($request);
    return response($request->title . $request->location);
});
