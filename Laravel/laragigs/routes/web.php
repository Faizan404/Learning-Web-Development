<?php

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
        "listings" => [
            [
                "id" => 1,
                "title" => "Listing One",
                "description" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit aut a architecto porroeius rem temporibus odio aperiam, quasi est debitis soluta adipisci itaque unde. Iste eius amet repellendus!"
            ],
            [
                "id" => 2,
                "title" => "Listing Two",
                "description" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit aut a architecto porroeius rem temporibus odio aperiam, quasi est debitis soluta adipisci itaque unde. Iste eius amet repellendus!"
            ],
            [
                "id" => 3,
                "title" => "Listing Three",
                "description" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit aut a architecto porroeius rem temporibus odio aperiam, quasi est debitis soluta adipisci itaque unde. Iste eius amet repellendus!"
            ],
        ]
    ]);
});

// todo: Reference
// Route::get('/', function () {
//     return view('welcome');
// });
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