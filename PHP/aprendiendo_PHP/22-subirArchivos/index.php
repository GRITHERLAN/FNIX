<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subir archivos php</title>
</head>

<body>
    <h1>Subir img archivo</h1>
    <form action="upload.php" method="POST" enctype="multipart/form-data">
        <input type="file" name="archivo"><br>
        <input type="submit" value="Enviar">
    </form>

    <h1>Listado de imagenes</h1>
    <?php
    /* creamos variable que abriria ese directorio */
    $gestor = opendir('./images');

    /* si mezclamos php y html en la vista, se debe tener la siguiente estructura para cerrar while,if,etc */

    if ($gestor):
        /* readdir lee lo que hay dentro de el directorio que le pasemos */
        while (!empty($image = readdir($gestor))):
            /* omitimos los puntos */
            if ($image != '.' && $image != '..'):
                echo "<img src='images/$image' width='200px'><br>";

            endif;
        endwhile;
    endif;
    ?>
</body>

</html>