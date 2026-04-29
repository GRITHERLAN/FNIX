<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>validacion PHP form</title>
</head>

<body>

    <?php
    if (isset($_GET['error'])) {
        $error = $_GET['error'];
        if ($error == "Faltan valores") {
            echo "<strong style = 'color:red'>Introduce todos los datos en los campos del formulario</strong>";
        }
    }
    ?>

    <form action="procesar_form.php" method="POST">
        <label for="nombre">Nombre:</label><br>
        <input type="text" name="nombre" required pattern="[A-Za-z]+"><br>

        <label for="apellido">Apellido:</label><br>
        <input type="text" name="apellido" required pattern="[A-Za-z]+"><br>

        <label for="edad">Edad:</label><br>
        <input type="numbre" name="edad" required pattern="[0-9]+"><br>

        <label for="email">Email:</label><br>
        <input type="email" name="email" required><br>

        <label for="pass">Contaseña:</label><br>
        <input type="password" name="pass" ><br>

        <input type="submit" value="Enviar">
    </form>

</body>

</html>