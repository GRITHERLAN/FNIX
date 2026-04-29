<?php

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularios</title>
</head>

<body>
    <h1>Formulario</h1>
    <form action="" method="POST" enctype="multipart/form-data">
        <label for="nombre"> Nombre:</label>
        <input type="text" name="nombre" autofocus> <br>

        <label for="apellido"> Apellido:</label>
        <input type="text" name="apellido"> <br>

        <label for="boton"> Boton:</label>
        <input type="button" name="boton" value="boton"> <br>

        <label for="sexo"> Sexo:</label><br>
        <label for="sexo"> Hombre:</label>
        <input type="checkbox" name="sexo" value="Hombre"> <br>
        <label for="sexo"> Mujer:</label>
        <input type="checkbox" name="sexo" value="Mujer"> <br>

        <label for="Color"> Color:</label>
        <input type="color" name="color" value="color"> <br>

        <label for="fecha"> Fecha:</label>
        <input type="date" name="fecha" value="fecha"> <br>

        <label for="correo"> Email:</label>
        <input type="email" name="email" value="email"> <br>

        <label for="archivo"> Archivo:</label>
        <input type="file" name="archivo" value="archivo" multiple> <br>

        <label for="archivo"> Archivo:</label>
        <input type="hidden" name="archivo" value="archivo" multiple> <br>


        <label for="numero"> Numero:</label>
        <input type="number" name="numero" value="numero"> <br>

        <label for="contraseña"> Clave:</label>
        <input type="password" name="contraseña" value="contraseña"> <br>

        <label for="continente"> continente:</label>
        <input type="radio" name="continente" value="continente"> <br>
        <label for="continente"> continente2:</label>
        <input type="radio" name="continente2" value="continente2"> <br>

        <label for="pagina"> pagina web:</label>
        <input type="url" name="url" value="url"> <br>

        <textarea name="Descripcion" id="desc"></textarea><br>
        <select name="peliculas" id="pelis">
            <option value="peli1">Spiderman</option>
            <option value="peli2">Batman</option>
            <option value="peli3">linterna verde</option>
        </select><br>
        <input type="submit" value="Enviar">
    </form>
</body>

</html>