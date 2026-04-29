<?php
$tablas = array(
    'ACCION' => array('GTA', 'COD', 'PUGB'),
    'AVENTURA' => array('ASSASSINS', 'CRASH', 'PRINCE OF PERSIA'),
    'DEPORTES' => array('FIFA', 'PES', 'MOTO GP')
);
/* sacamos las keys o variables a las que le asociamos eun array */
$categorias = array_keys($tablas);

echo "<table border='2'> ";
echo "<tr>";
foreach ($categorias as $categoria) {
    echo "<td>" . $categoria . " </td>";
}
echo "</tr>";
echo "<tr>";
echo "<td>";
echo $tablas['ACCION'][0];
echo "</td>";
echo "<td>";
echo $tablas['AVENTURA'][0];
echo "</td>";
echo "<td>";
echo $tablas['DEPORTES'][0];
echo "</td>";
echo "</tr>";
echo "<tr>";
echo "<td>";
echo $tablas['ACCION'][1];
echo "</td>";
echo "<td>";
echo $tablas['AVENTURA'][1];
echo "</td>";
echo "<td>";
echo $tablas['DEPORTES'][1];
echo "</td>";
echo "</tr>";
echo "<tr>";
echo "<td>";
echo $tablas['ACCION'][2];
echo "</td>";
echo "<td>";
echo $tablas['AVENTURA'][2];
echo "</td>";
echo "<td>";
echo $tablas['DEPORTES'][2];
echo "</td>";
echo "</tr>";
echo "</table>";
?>