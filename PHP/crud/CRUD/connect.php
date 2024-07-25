<?php 

$server = "localhost";
$name = "root";
$password = "";
$db_name = "crud_db";

$con = new mysqli($server,$name,$password,$db_name);

if(!$con){
    die(mysqli_error($con));
}
?>