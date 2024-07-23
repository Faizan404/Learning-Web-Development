<?php
include "connect.php";

$id = $_GET['updateid'];

$sql = "SELECT * FROM `crudtable` where id = $id ";

$result = mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($result);

$name = $row['name'];
$email = $row['email'];
$mobile = $row['mobile'];
$password = $row['password'];


if(isset($_POST['submit'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $password = $_POST['password']; 

    $sql = "UPDATE `crudtable` SET `name`='$name',`email`='$email',`mobile`='$mobile',`password`='$password' WHERE id = $id";

    $result = $con->query($sql);
    echo $result;
    if($result){
        header('location:display.php');
    }else{
        die(mysqli_error($con));
    }

}


?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>



  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<button class="btn btn-warning"><a href="display.php">USER</a></button>

<div class="container mt-5">
<form method="POST">
<div class="mb-3">
    <label  class="form-label">Name</label>
    <input type="text" name="name" placeholder="Enter your name" class="form-control" value="<?php echo  $name ?>" required>    
  </div>

  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" name="email" value="<?php echo  $email ?>"class="form-control" required>    
  </div>

  <div class="mb-3">
    <label  class="form-label">Mobile</label>
    <input type="number" name="mobile" placeholder="Enter your number" class="form-control" required value="<?php echo  $mobile ?>" >    
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" placeholder="Enter your password" name="password" class="form-control" value="<?php echo  $password ?>" required>
  </div>

  <button class="btn btn-primary" name="submit" type="submit" >Update</button>
 
</form>
</div>




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
  </body>
</html>

