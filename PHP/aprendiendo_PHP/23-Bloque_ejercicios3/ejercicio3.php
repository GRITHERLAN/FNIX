<?php

$numero1 = 0;
$numero2 = 0;

$operacion = $_POST['operacion'];

$resultado = 0;
if (isset($numero1) && isset($numero2)) {

    $numero1 = intval($_POST['numero1']);
    $numero2 = intval($_POST['numero2']);

    if ($operacion == 'Sumar') {
        $resultado = $numero1 + $numero2;
    }

    if ($operacion == 'Multiplicar') {
        $resultado = $numero1 * $numero2;
    }

    if ($operacion == 'Restar') {
        $resultado = $numero1 - $numero2;
    }

    if ($operacion == 'Dividir') {
        if ($numero2 != 0) {
            $resultado = $numero1 / $numero2;
        } else {
            echo "no se puede dividir entre cero";
        }

    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora PHP</title>
</head>

<body>
    <form action="ejercicio3.php" method="POST">
        <label for="numero1">Numero 1:</label>
        <input type="number" name="numero1">
        <label for="numero2">Numero 2:</label>
        <input type="number" name="numero2">

        <hr>

        <label for="resultado">Resultado:</label>
        <input style="font-size: large;" name="resultado" type="number" placeholder=<?= $resultado; ?> disabled>

        <hr>

        <input type="submit" value="Sumar" name="operacion">
        <input type="submit" value="Multiplicar" name="operacion">
        <input type="submit" value="Restar" name="operacion">
        <input type="submit" value="Dividir" name="operacion">
    </form>
</body>

</html>