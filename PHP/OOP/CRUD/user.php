<?php
require_once 'database.php';

class User{
    private $conn;

    public function __construct($database) {
        $this->conn = $database->conn;
    }

    // Method to add a new user
    public function createUser($firstname, $lastname, $email) {
        $query = "INSERT INTO users (firstname, lastname, email) VALUES ('$firstname', '$lastname', '$email')";
        $stmt = $this->conn->query($query);
        // $stmt = mysqli_query($this->conn, $query);

        if($stmt) {
            return true;
        }

        return false;
    }

    // Method to fetch all users
    public function getUsers() {
        $query = "SELECT * FROM users";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Additional methods for update and delete can be implemented similarly
}
?>
