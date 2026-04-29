<?php
$numeros = [1, 2, 6, 8, 5, 3, 4, 7];

/* Recorremos array y mostramos */
foreach ($numeros as $numero) {
    echo " $numero";
}
echo "<hr>";

/* ordenamos y mostramos */
sort($numeros);
foreach ($numeros as $numero) {
    echo " $numero";
}
echo "<hr>";
/* Mostramos su longitud */
echo "El array tiene una longitud de " . count($numeros);

echo "<hr>";
/* Buscamos algun elemento */
$indice = array_search(2, $numeros);
echo "en la posicion $indice esta el elemento: " . $numeros[$indice];
?>