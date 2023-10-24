<?php 
    session_start();

    $servername = "localhost";
    $username = "rafael";
    $password = "123456";
    $dbname = "login";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }
?>