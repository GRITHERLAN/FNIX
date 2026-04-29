<?php

$color = "Rojo";

if ($color == "Rojo") {
    echo "<h1> El color es Rojo </h1>";
} else {
    echo "<h1> El color NO es Rojo </h1>";
}

$year = 2025;

if ($year == 2025) {
    echo "<h1> El Año es 2025 </h1>";
} else {
    echo "<h1> El Año es diferente al 2025 </h1>";
}

$edad = 80;
$ciudad = "Madrid";
$mayorEdad = 18;

if ($edad >= $mayorEdad) {
    echo "<h1>Es mayor de edad porque tiene $edad y es de $ciudad </h1>";
} else {
    echo "<h1>No es mayor de edad porque tiene $edad </h1>";
}

$dia = 3;
if ($dia == 1) {
    echo "<h1>Es Lunes</h1>";
} elseif ($dia == 2) {
    echo "<h1>Es Martes</h1>";
} elseif ($dia == 3) {
    echo "<h1>Es Miercoles</h1>";
} elseif ($dia == 4) {
    echo "<h1>Es Jueves</h1>";
} elseif ($dia >= 5) {
    echo "<h1>Es Fin de semana</h1>";
}

$edadMaxima = 64;
if ($edad >= $mayorEdad && $edad <= $edadMaxima) {
    echo "<h1> Edad apropiada para laborar </h1>";
} else {
    echo "<h1>No esta en Edad apropiada para laborar </h1>";
}

switch ($dia) {
    case '1':
        echo "<h1>Es Lunes</h1>";
        break;
    case '2':
        echo "<h1>Es Martes</h1>";
        break;
    case '3':
        echo "<h1>Es Miercoles</h1>";
        break;
    case '4':
        echo "<h1>Es Jueves</h1>";
        break;
    default:
        echo "<h1>Es Fin de semana</h1>";
        break;
}

goto marca;
echo "<h3>Instruccion 1</h3>";
echo "<h3>Instruccion 2</h3>";
echo "<h3>Instruccion 3</h3>";
echo "<h3>Instruccion 4</h3>";

marca:
echo "<h1> Me he saltado 4 echos </h1>"
    ?>