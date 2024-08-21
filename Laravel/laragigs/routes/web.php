<?php

use App\Models\Listings;
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
        "listings" => Listings::all()
    ]);
});

// Route::get('/post/{id}', function ($id) {
//     return view('listing', [
//         "listing" => Listings::find($id)
//     ]);
// })->where('id', '[0-9]+');


// todo: Reference
Route::get('/', function () {
    return view('listings');
});
// Route::get('/hello', function () {
//     return response("<h1>Hello World!</h1>", 200)
//         ->header('Content-Type', 'text/plain')
//         ->header('foo', 'bar');
// });

// Route::get('/post/{id}', function ($id) {
//     dd($id);
//     return response('Post' . $id);
// })->where('id', '[0-9]+');

// Route::get('/search', function (Request $request) {
//     return $request->name . $request->loc;
// });