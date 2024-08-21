<?php

namespace App\Models;

class Listings
{
    public static function all()
    {
        return [
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
        ];
    }

    public static function find($id)
    {
        $listings = self::all();

        foreach ($listings as $listing) {
            if ($listing["id"] == $id) {
                return $listing;
            }
        }
    }
}