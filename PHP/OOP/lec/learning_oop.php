<!-- Object  Oriented Programming OOP -->
<?php
// Class : Blue Print
abstract class Car
{
    // access modifiers
    // public
    // protected
    // private

    // properties (variables)
    public $color;
    public $model;

    // constructor
    function __construct($color, $model)
    {
        $this->color =  $color;
        $this->model =  $model;
    }

    // destructor
    function __destruct()
    {
        echo "End of the script";
    }

    // methods (functions)
    abstract protected function car_details($color);
}

class Tesla extends Car
{
    public $car_type = "Electric";

    protected function car_details($color)
    {
        $this->color = $color;
        return "Color of car is " . $this->color;
    }

    public function display_car_type()
    {
        echo $this->car_details(null);
        return $this->car_type;
    }
}

// Objects : Instance
$car_tesla = new Tesla("Black", 2022);
// echo $car_tesla->car_details("Black") . "<br>";
echo $car_tesla->display_car_type() . "<br>";

// $my_car = new Car("Orange", "2008");
// echo $my_car->color . "<br>";
// echo $my_car->car_details("Red") . "<br>";
// print_r($my_car) . "<br>";



?>