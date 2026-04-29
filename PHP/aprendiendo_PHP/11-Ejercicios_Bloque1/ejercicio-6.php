<?php
echo "<table border='2'> ";
echo "<tr>";
for ($i = 0; $i <= 10; $i++) {
    echo "<td> Tabla de $i </td>";
}
echo "</tr>";
$contador2 = 0;
for ($i = 0; $i <= 10; $i++) {
    if ($i == 0) {
        echo "<tr>";
    }
    $multiplicacion = $contador2 * $i;
    echo "<td>$i * $contador2 = $multiplicacion</td>";
    if ($i == 10 && $contador2 < 10) {
        $i = -1;
        $contador2++;
        echo "</tr>";
    }
}
echo "</table>";
?>