<?php
$arreglo = array();
$entero = 2;
$cadena = "cadena";
$booleano = true;

if (is_array($arreglo)) {
    echo "Es un Array";
} else {
    echo "No es un Array";
}
echo "<br>";
if (is_int($entero)) {
    echo "Es un INT";
} else {
    echo "No es un INT";
}
echo "<br>";
if (is_string($cadena)) {
    echo "Es un String";
} else {
    echo "No es un String";
}
echo "<br>";
if (is_bool($booleano)) {
    echo "Es un Boolean";
} else {
    echo "No es un Boolean";
}
?>