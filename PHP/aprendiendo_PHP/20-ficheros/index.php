<?php
/* abrir archivo */
$abrir = fopen("fichero.txt", "a+");

/* leer contenido */
while (!feof($abrir)) {
    $contenido = fgets($abrir);
    echo $contenido . "<br>";
}

/* escribir */
fwrite($abrir, "<br>Soy un texto metido desde php");

/* cerrar archivo */
fclose($abrir);
/* copiar */
copy('fichero.txt', "fichero_copiado.txt") or die("error al copiar");
/* cambiar nombre */
rename('fichero_copiado.txt', "archivivaldo.txt") or die("error al cambiar nombre");
/* eliminar */
unlink("archivivaldo.txt") or die("error al eliminar");

/* comprobar existencia de un archivo */
if (file_exists("fichero.txt")) {
    echo "el archivo existe";
} else {
    echo "no existe";
}


?>