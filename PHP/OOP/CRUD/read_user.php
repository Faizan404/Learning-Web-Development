<?php
require_once 'Database.php';
require_once 'User.php';

$database = new Database();
$user = new User($database);

$users = $user->getUsers();

echo "<h2>Users List</h2>";
echo "<table border='1'>";
echo "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th></tr>";

foreach ($users as $row) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['firstname'] . "</td>";
    echo "<td>" . $row['lastname'] . "</td>";
    echo "<td>" . $row['email'] . "</td>";
    echo "</tr>";
}

echo "</table>";
