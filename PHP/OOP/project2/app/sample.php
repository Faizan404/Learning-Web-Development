<?php 

// require_once dirname(__FILE__)."/../include/database.php";
require_once dirname(__FILE__)."/database.php";
require_once dirname(__FILE__)."/database2.php";

use app\database\A  as A;

use app\database\C  as Y;

use app\database2\A as B;

// echo dirname(__FILE__)

$abc = new A;
$abc->SetName("from database file");
echo $abc->GetName();

echo "<br>";

$abc = new B;
$abc->SetName("from database2 file");
echo $abc->GetName();
echo "<br>";

$abc = new Y;
?>


<!-- C:\xampp\htdocs\Learning-Web-Development\PHP\OOP\project2\app -->
<!-- http://localhost/Learning-Web-Development/PHP/OOP/project2/app/ -->

