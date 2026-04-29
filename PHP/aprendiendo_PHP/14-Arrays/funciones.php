<?php
$cantantes = ['bad bunny', 'eminem', 'drake'];
$numero = [1, 2, 3, 5, 7, 9, 0, 4, 8];
/* orden alfabetico */
asort($cantantes);
var_dump($cantantes);
/* orden inverso y alfabetico */
arsort($cantantes);
var_dump($cantantes);
/* ordenar numericamente */
sort($numero);
var_dump($numero);
/* añadir elementos a un array */
$cantantes[] = "2pac";
var_dump($cantantes);
array_push($cantantes, "Nicolas");
var_dump($cantantes);
/* eliminar elemento array ultimo dato*/
array_pop($cantantes);
var_dump($cantantes);
/* elimina el elemento exacto */
unset($cantantes[0]);
var_dump($cantantes);
/* sacar un elemento aleatorio */
$indice = array_rand($cantantes);
echo $cantantes[$indice];
/* dar vuelta */
var_dump(array_reverse($numero));
/* buscar en array, saca el indice */
echo array_search('eminem', $cantantes);
/* contar elementos */
echo "<br>";
echo count($cantantes);
echo "<br>";
echo sizeof($cantantes);
?>