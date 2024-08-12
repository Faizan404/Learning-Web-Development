<?php
require_once 'config.php';

class Student {
    private $db;

    public function __construct($database) {
        $this->db = $database;
    }

    public function getStudents() {
        $query = "SELECT * FROM students";
        $result = $this->db->query($query);

        $students = [];
        while ($row = $result->fetch_assoc()) {
            $students[] = $row;
        }
        return $students;
    }
}
?>
