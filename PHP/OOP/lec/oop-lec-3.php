<?php
// <!-- Traits -->
trait MessageTrait
{
    public function msg()
    {
        echo "Hello from trait";
    }
}

// <!-- Interfaces -->
interface MessageInterface {
    public function imsg();
}


class MyClass implements MessageInterface
{
    const MY_CONSTANT = "Hello World";

    use MessageTrait;

    public static function staticMethod(){
        echo "Hello from static method";
    }

    public function imsg(){
        // echo self::MY_CONSTANT;
        self::staticMethod();
        echo "Hello from interface";
    }

} 

// <!-- constants -->
echo MyClass::MY_CONSTANT . "<br>";
// MyClass::staticMethod();

$my_class = new MyClass;
// $my_class->msg() . "<br>";
$my_class->imsg() . "<br>";

// <!-- final -->
final class BaseClass {
    final public function finalMethod(){
        echo "This is a final method";
    }
}

class ChildClass extends BaseClass {
    public function Method()
    {
        echo "Trying to override base method" . "<br>";
    }
}

$child = new ChildClass;
$child->finalMethod() ;
$child->Method() ;

// static Methods