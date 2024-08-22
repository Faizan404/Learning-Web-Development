<?php

namespace App\Models;

class Listing
{
    public static function all()
    {
        return [
            [
                "id" => 1,
                "title" => "Listing One",
                "description" =>  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis alias impedit hic quidem? Iusto ipsa eaque, laborum natus delectus necessitatibus alias voluptate odit animi maxime, debitis dicta sapiente. Optio."
            ],
            [
                "id" => 2,
                "title" => "Listing Two",
                "description" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis alias impedit hic quidem? Iusto ipsa eaque, laborum natus delectus necessitatibus alias voluptate odit animi maxime, debitis dicta sapiente. Optio.",
            ],
            [
                "id" => 3,
                "title" => "Listing Three",
                "description" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis alias impedit hic quidem? Iusto ipsa eaque, laborum natus delectus necessitatibus alias voluptate odit animi maxime, debitis dicta sapiente. Optio."
            ]
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