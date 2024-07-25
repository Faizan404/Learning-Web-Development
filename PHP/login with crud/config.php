<?php 


$conn = new mysqli('localhost','root','','login');

if($conn->connect_error){

    die("connection Failed:  " . $conn->connect_error);
    
}