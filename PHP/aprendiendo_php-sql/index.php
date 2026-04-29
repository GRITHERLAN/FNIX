<?php
/* Conectar a BD */
$conexion = mysqli_connect("localhost", "root", "Grither2031**", "php_my_sql");
/* comprobar si es correcta */
if (mysqli_connect_errno()) {
    echo "La conexion a la BD MySQL ha fallado" . mysqli_connect_errno();
} else {
    echo "Conexion Exitosa";
}

/* Consulta para configurar la codificacion de caracteres */
mysqli_query($conexion, "SET NAMES 'utf8'");

/* Consulta SELECT desde PHP*/
$query = mysqli_query($conexion, "SELECT * FROM Notas");

/* se una fetch asocc para sacar los datos arrays */
while ($nota = mysqli_fetch_assoc($query)) {
    /* sacamos el registro del campo solicitado */
    echo "<h2>" . $nota['titulo'] . "</h2>";
    echo "<span>" . $nota['descripcion'] . "</span>";
}

/* insertar en la BD desde PHP */
/* $insertsql = " INSERT INTO Notas VALUES (null, 'Nota desde PHP','Esto es insertado desde php','GREEN')";
$query_Insert = mysqli_query($conexion, $insertsql);

if ($query_Insert) {
    echo "<br>" . "Se inserto los datos correctamente";
} else {
    echo "no se insertaron datos";
}
 */

?>