<?php
require_once 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];

    if ($username == NULL  || $email == NULL) {
        $res = [
            "status" => 422,
            "message" => "All fields are mandatory"
        ];
        echo json_encode($res);
        return false;
    }

    $query = "INSERT INTO students (username, email) VALUES ('$username', '$email')";

    $result = $conn->query($query);

    if ($result) {
        $res = [
            "status" => 200,
            "message" => "User created successfully! Username: $username, Email: $email"
        ];
        echo json_encode($res);
        return false;
    } else {
        $res = [
            "status" => 500,
            "message" => "User not created! Username: $username, Email: $email"
        ];
        echo json_encode($res);
        return false;
    }
}
