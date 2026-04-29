<?php

$variable = 0;

while ($variable <= 100) {
    echo "$variable, ";
    $variable++;
}

echo "<hr>";

if (isset($_GET['numero'])) {
    $numero = $_GET['numero'];

} else {
    $numero = 1;
}

echo "<h1> Tabla de multiplicar del numero $numero </h1>";

$contador = 0;

while ($contador <= 10 && $numero <= 10) {
    $multiplicacion = $numero * $contador;
    echo "<br>";
    echo "$numero x $contador = $multiplicacion";
    $contador++;
    if ($contador == 11 && $numero < 11) {
        $numero++;
        $contador = 0;
    }
}


echo "<br>";
$edad = 18;
$contador2 = 1;
do {

    echo "tienes acceso al local privado: $contador2";
    echo "<br>";
    $contador2++;
} while ($edad >= 18 && $contador2 <= 10);




?>