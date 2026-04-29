<?php


if (isset($_POST)) {
    /* conexion a BD */
    require_once "includes/conexion.php";

    /* recojer datos por formulario */
    $nombre = isset($_POST['nombre']) ? mysqli_real_escape_string($db, $_POST['nombre']) : false;
    $apellidos = isset($_POST['apellidos']) ? mysqli_real_escape_string($db, $_POST['apellidos']) : false;
    $email = isset($_POST['email']) ? trim($_POST['email']) : false;
    $contraseña = isset($_POST['password']) ? $_POST['password'] : false;

    /* array de errores */
    $errores = array();

    /* validar datos antes de guardarlos en la BD */
    if (!empty($nombre) && !is_numeric($nombre) && !preg_match("/[0-9]/", $nombre)) {
        $nombre_validate = true;
    } else {
        $nombre_validate = false;
        $errores['nombre'] = "el nombre no es valido";
    }

    if (!empty($apellidos) && !is_numeric($apellidos) && !preg_match("/[0-9]/", $apellidos)) {
        $apeliidos_validate = true;
    } else {
        $apeliidos_validate = false;
        $errores['apellidos'] = "los apellidos no es valido";
    }

    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $email_validate = true;
    } else {
        $email_validate = false;
        $errores['email'] = "el email no es valido";
    }

    if (!empty($contraseña)) {
        $password_validate = true;
    } else {
        $password_validate = false;
        $errores['password'] = "la contraseña esta vacia";
    }
    $guardar_usuario = false;

    if (count($errores) == 0) {
        $guardar_usuario = true;
        /* cifrar la contraseña */
        $password_segura = password_hash($contraseña, PASSWORD_BCRYPT, ['cost' => 4]);

        /* insertar usuarios en la BD */
        $sql = "INSERT INTO usuarios VALUES(null, '$nombre', '$apellidos', '$email', '$password_segura', CURDATE());";

        $guardar = mysqli_query($db, $sql);

        if ($guardar) {
            $_SESSION['completado'] = "el registro se ha compeltado con exito";
        } else {
            $_SESSION['errores']['general'] = "fallo al guardar el usuario";
        }

    } else {
        $_SESSION['errores'] = $errores;
    }
    header('location: index.php');
}
?>