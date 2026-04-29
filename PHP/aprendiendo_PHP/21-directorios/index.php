<?php
/* crear directorios */
if (!is_dir('mi_carpeta')) {
    mkdir('mi_carpeta', 0777) or die('error al crear carpeta');
} else {
    echo "ya existe";
}
/* borrar directorios */
// rmdir('mi_carpeta');

/* recorrer archivos en un directorio */
if ($gestor = opendir('./mi_carpeta')) {
    while (!empty($archivo = readdir($gestor))) {
        echo $archivo . "<br>";
    }
}

?>