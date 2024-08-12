<?php

declare(strict_types=1);

namespace app\database;


class A
{
    private  $name;

    public function SetName(string $n)
    {
        $this->name = $n;
    }

    public function GetName():string
    {

        return $this->name;
    }
}


class C{

    public function __construct()
    {
        echo "class c called from database file";
    }
}