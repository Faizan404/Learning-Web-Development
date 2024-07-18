<?php
include "connect.php";
include "index.php";


if(isset($_POST['submit'])){

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$password = $_POST['password']; 

$sql = "INSERT INTO `crudtable`(`name`, `email`, `mobile`, `password`) VALUES ('$name','$email','$mobile','$password')";

$result = $con->query($sql);
echo $result;






}