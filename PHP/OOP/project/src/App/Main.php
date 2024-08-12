<?php

namespace App;
// require_once dirname(__FILE__)."/../Utility/Helper.php";
use Utility\Helper;

class Main {
    public function greet(){
        echo Helper::sayHello();
    }
}

?>