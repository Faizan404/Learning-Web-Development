<?php

declare(strict_types=1);

namespace app\database2;


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
