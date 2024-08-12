<?php
require_once 'database.php';
require_once 'user.php';

$database = new Database();
$user = new User($database);

if(isset($_POST['create'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];

    if($user->createUser($firstname, $lastname, $email)) {
        echo "User created successfully.";
    } else {
        echo "Failed to create user.";
    }
}
?>

<!-- HTML form for creating a user -->
<form action="create_user.php" method="post">
    <input type="text" name="firstname" placeholder="First Name" required>
    <input type="text" name="lastname" placeholder="Last Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="submit" name="create" value="Create">
</form>
