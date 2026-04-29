<?php
/* para mostrar el valor de las cookies tengo que usar $_COOKIE es un array asociativo */
if (isset($_COOKIE['micookie'])) {
    echo $_COOKIE['micookie'];
    echo "<br>";
} else {
    echo "no existe cookie";
    echo "<br>";
}

if (isset($_COOKIE['unYear'])) {
    echo $_COOKIE['unYear'];
    echo "<br>";
} else {
    echo "no existe cookie";
    echo "<br>";
}


?>

<a href="borrar_cookie.php">Borrar mis galletas</a>
<a href="index.php">Crear mis galletas</a>