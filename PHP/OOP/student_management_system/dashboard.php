<?php
session_start();
require_once 'Student.php';
$db = config();
$student = new Student($db);

if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit;
}

$students = $student->getStudents();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>

<h2>Dashboard</h2>

<table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
    </tr>
    <?php foreach ($students as $student): ?>
    <tr>
        <td><?php echo htmlspecialchars($student['id']); ?></td>
        <td><?php echo htmlspecialchars($student['name']); ?></td>
        <td><?php echo htmlspecialchars($student['email']); ?></td>
        <td><?php echo htmlspecialchars($student['course']); ?></td>
    </tr>
    <?php endforeach; ?>
</table>

<a href="logout.php">Logout</a>

</body>
</html>
