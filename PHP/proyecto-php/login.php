<?php
/* inicior sesion y conectar a la BD */
require_once "includes/conexion.php";
/* Recoger datos del form */
if ($_POST) {
    $email = trim($_POST['email']);
    $constraseña = $_POST['password'];

    /* comprobar y validar email y contraseña vs lo que hay en BD */
    $sql = "SELECT * FROM usuarios WHERE email = '$email' LIMIT 1;";
    $login = mysqli_query($db, $sql);

    if ($login && mysqli_num_rows($login) == 1) {
        $usuario = mysqli_fetch_assoc($login);

        /* comprobar la contraseña */
        $verify = password_verify($constraseña, $usuario['password']);
        if ($verify) {
            /* Utilizar una Sesion para guardar los datos del usuario logueado*/
            $_SESSION['usuario'] = $usuario;
            if (isset($_SESSION['error_login'])) {
                unset($_SESSION['error_login']);
            }

        } else {
            /* si algo falla enviar una sesion con el fallo y redirigir al index */
            $_SESSION['error_login'] = "Contraseña incorrecta";
        }
    } else {
        $_SESSION['error_login'] = "no existe el usuario";
    }
}

header("location: index.php");


?>