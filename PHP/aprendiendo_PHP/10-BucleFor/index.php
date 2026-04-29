<?php

$resultado = 0;

for ($i = 0; $i <= 100; $i++) {
    $resultado += $i;
}
echo "<br> $resultado";

$contador2 = 0;
for ($i = 0; $i <= 10; $i++) {
    $multiplicacion = $contador2 * $i;
    echo "<br>$contador2 * $i = $multiplicacion";
    if ($i == 10 && $contador2 < 10) {
        $i = -1;
        $contador2++;
    }

}
?>