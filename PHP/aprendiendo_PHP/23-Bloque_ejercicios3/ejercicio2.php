<?php

$email = $_GET['email'];

function ValidarEmail($email)
{
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $resultado = "<br>El correo es correcto";
    } else {
        $resultado = "<br>El correo no es correcto";
    }

    return $resultado;

}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validar email</title>
</head>

<body>
    <form action="ejercicio2.php" method="GET">
        <label for="email">Correo</label>
        <input type="text" name="email">
        <input type="submit" value="Enviar">
    </form>
    <h1><?= ValidarEmail($email); ?></h1>
</body>

</html>