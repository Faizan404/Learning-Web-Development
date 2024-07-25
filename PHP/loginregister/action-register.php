<?php
include "db.php";

if(isset($_POST['submit'])){

$username = $_POST['username'];
// $password = $_POST['password'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);


$sql = "INSERT INTO `users`( `username`, `password`) VALUES ('$username','$password')";

$result = mysqli_query($conn,$sql);
echo $result ;
if(!$result){

    die(mysqli_error($conn,$result));

}else{
  
   echo ' <div class="alert alert-primary" role="alert">
  register successfully
</div>';
header("Refresh:1, url=login.php");
}
}
?>