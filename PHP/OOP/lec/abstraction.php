<?php

abstract class Shape
{
    protected $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function get_name()
    {
        return $this->name;
    }

    abstract public function calc_area();
}

class Rectangle extends Shape
{
    private $length;
    private $width;

    public function __construct($name, $len, $wdh)
    {
        parent::__construct($name);
        $this->length = $len;
        $this->width = $wdh;
    }

    public function calc_area()
    {
        return $this->length * $this->width;
    }
}

class Circle extends Shape
{
    private $radius;

    public function __construct($name, $radius)
    {
        parent::__construct($name);
        $this->radius = $radius;
    }

    public function calc_area()
    {
        return 2 * 3.14 * $this->radius;
    }
}

$rec = new Rectangle("Rectangle", 23, 12);
echo "Shape is " . $rec->get_name() . "area is: " . $rec->calc_area();

echo "<br>";

$circle = new Circle("Circle", 23);
echo "Shape is " . $circle->get_name() . "area is: " . $circle->calc_area();
