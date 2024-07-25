<?php

$conn = new mysqli("localhost","root","","simple_login_system");

if(!$conn){

    die(mysqli_error($conn));

}