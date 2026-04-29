<?php
$contador1 = $_GET['contador1'];
$contador2 = $_GET['contador2'];

if ($contador1 == $contador2) {
    echo "deben ser numeros con almenos uno de diferencia";
} else if ($contador1 > $contador2) {
    echo "El primero numero no puede ser mayor al segundo";
}

$validacion = $contador2 - $contador1;
if ($validacion == 1) {
    die("0");
}

$contador1++;

for ($i = $contador1; $i < $contador2; $i++) {
    echo $i;
}
?>