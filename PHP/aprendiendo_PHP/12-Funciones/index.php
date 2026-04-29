<?php

function MuestraNombres()
{
    echo "Nicolas Valencia<br>";
    echo "Nicolas Valencia<br>";
    echo "Nicolas Valencia<br>";
    echo "Nicolas Valencia";
}

MuestraNombres();



function tabla($numero)
{
    echo "<h1>tabla de multiplicar del numero : $numero</h1>";
    for ($i = 1; $i <= 10; $i++) {
        echo "$numero x $i = " . ($numero * $i) . "<br>";

    }
}

if (isset($_GET['numero'])) {
    tabla($_GET['numero']);
} else {
    echo "<hr>Debe ingresar un numero<hr>";
}

/* for ($i = 0; $i <= 10; $i++) {
    tabla($i);
} */


function Calculadora($numero1, $numero2, $negrita = false)
{
    $suma = $numero1 + $numero2;
    $resta = $numero1 - $numero2;
    $multi = $numero1 * $numero2;
    $division = $numero1 / $numero2;

    $cadena_texto = "";

    if ($negrita) {
        $cadena_texto .= "Hola <br>";
    }

    $cadena_texto .= "Suma : $suma <br>";
    $cadena_texto .= "Resta : $resta <br>";
    $cadena_texto .= "Multi : $multi <br>";
    $cadena_texto .= "Division : $division <hr>";

    return $cadena_texto;
}

echo Calculadora(3, 5, true);

function ConseguirNombre($nombre)
{
    return $nombre . " tiene 25 años";

}


function ConseguirApellido($apellido)
{
    return $apellido . " tiene 25 años";

}


function DevuelveNombre($nombre = 2, $apellidos = 4)
{
    $texto = "El nombre es: " . ConseguirNombre($nombre) . " y el apellido es:" . ConseguirApellido($apellidos);
    return $texto;
}

echo DevuelveNombre("Nicolas", "Valencia");

?>