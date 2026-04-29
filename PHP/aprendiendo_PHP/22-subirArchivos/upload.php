<?php
$archivo = $_FILES['archivo'];

$nombre = $archivo['name'];
$tipo = $archivo['type'];
/* se comprueba que el tipo de archivo que se suba sea el formato correcto */
if (
    $tipo == 'image/png' || $tipo == 'image/jpg' || $tipo == 'image/jpeg'
    || $tipo == 'image/gif'
) {
    /* se valida si existe la carpeta o sino la creamos */
    if (!is_dir('images')) {
        mkdir('images', 0777);
    }
    /* se usa para sacar el archivo de la ruta temporal y guardarlo en la carpeta que creamos */
    move_uploaded_file($archivo['tmp_name'], 'images/' . $nombre);

    header("Refresh: 5 ; URL=index.php");
    echo "<h1>Subida correcta</h1>";

} else {
    /* refresca la pagina en 5 segundos */
    header("Refresh: 5 ; URL=index.php");
    echo "Debes subir una imagen con un formato correcto";
}

?>