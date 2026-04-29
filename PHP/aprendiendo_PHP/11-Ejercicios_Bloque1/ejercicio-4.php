<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
</head>

<body>
    <form action="ejercicio-4.php" method="POST">
        <label for="numero1">Numero1:</label>
        <input type="text" name="numero1">
        <label for="numero2">Numero2:</label>
        <input type="text" name="numero2">
        <input type="submit">
    </form>
</body>

</html>


<?php
$numero1 = $_POST['numero1'];
$numero2 = $_POST['numero2'];

if ($numero1 == "") {
    $numero1 = 0;
}

if ($numero2 == "") {
    $numero2 = 0;
}

$suma = $numero1 + $numero2;
$resta = $numero1 - $numero2;
$multi = $numero1 * $numero2;

echo "<hr>
la suma entre $numero1 y $numero2 es igual a: $suma <hr>
la resta entre $numero1 y $numero2 es igual a : $resta<hr>
la multiplicacion entre $numero1 y $numero2 es igual a : $multi<hr>";

if ($numero2 != 0) {
    $division = $numero1 / $numero2;
    echo "  le division entre $numero1 y $numero2 es igual a : $division";
} else {
    echo "No se puede dividir 0 sobre 0";
}
?>