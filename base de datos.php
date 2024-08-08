<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "travelblue";

    $conn = new mysqli($servername,$username,$password,$bdname);
    if ($conn->connect_error) { 
        die("conexion fallida: ".$conn->connect_error());
    }
?>