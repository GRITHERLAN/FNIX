<?php

$error = "Faltan valores";

if (
    !empty($_POST['nombre']) && !empty($_POST['apellido'])
    && !empty($_POST['edad']) && !empty($_POST['email'])
    && !empty($_POST['pass'])
) {
    $error = "OK";

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $edad = $_POST['edad'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    /* validar datos */
    /* preg_match hace lo que hace un pattern en html, se pasa los parametros a validar y la variable */
    if (!is_string($nombre) || !preg_match("/[a-zA-z ]+/", $nombre)) {
        $error = "nombre";
    }

    if (!is_string($apellido) || !preg_match("/[a-zA-z ]+/", $apellido)) {
        $error = "apellido";
    }
    /* filter_var valida que la variable contenga la informacion correcta */
    if (!is_numeric($edad) || !filter_var($edad, FILTER_VALIDATE_INT)) {
        $error = "edad";
    }

    if (!is_string($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "email";
    }

    if (empty($pass) || strlen($pass) < 5) {
        $error = "password";
    }

} else {

}

if ($error != "OK") {
    header("Location:index.php?error=$error");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- mezcla de HTML y PHP, sintaxis -->
    <?php if ($error == "OK"): ?>
        <h1>Datos validados correctamente</h1>
        <p><?= $nombre ?></p>
        <p><?= $apellido ?></p>
        <p><?= $edad ?></p>
        <p><?= $email ?></p>
        <p><?= $pass ?></p>
    <?php endif; ?>
</body>

</html>