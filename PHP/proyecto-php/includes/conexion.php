<?php
    /* conexion BD */
    $server = 'localhost';
    $username = 'root';
    $password = 'Grither2031**';
    $database = 'blog';
    $db = mysqli_connect($server,$username,$password,$database);

    mysqli_query($db, "SET NAMES 'utf8'");

    /* iniciar sesion */

    session_start();
?>