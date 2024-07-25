<?php
include "config.php";


if($_SERVER['REQUEST_METHOD'] == 'POST'){


$name  = $_POST['name'];
$password  = $_POST['password'];

$sql = "SELECT * FROM loginget WHERE name = '$name'";
$result = $conn->query($sql);

if($result->num_rows > 0){
    $row  = $result->fetch_assoc();

    if(password_verify($password, $row['password'])){

    echo "login successfuly";
    header("location : welcome.php");

    }
    else{

        echo "invalid password";
    }
}else{

    echo "No User Found";

}

$conn->close();

}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<form action="login.php" method="POST">


<label>username: </label>
<input type="text" name="name" placeholder="enter your name">
<label>password: </label>
<input type="number" name="password" placeholder="enter your password">

<button type="submit" >Login</button>


</form>

</body>
</html>