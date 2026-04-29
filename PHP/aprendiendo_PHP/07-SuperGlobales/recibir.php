<?php
/* metodo GET */
// echo "Metodo GET";
// echo "<br>";
// echo "<h1>" . $_GET['nombre'] . "</h1>";
// echo "<h1>" . $_GET['apellido'] . "</h1>";
/* miramos que datos recibimos */
// echo "<h1>" . var_dump($_GET) . "</h1>";

/* metodo POST */
echo "<br>";
echo "Metodo POST";
echo "<h1>" . $_POST['nombre'] . "</h1>";
echo "<h1>" . $_POST['apellido'] . "</h1>";
/* miramos que datos recibimos */
echo "<h1>" . var_dump($_POST) . "</h1>";
?>