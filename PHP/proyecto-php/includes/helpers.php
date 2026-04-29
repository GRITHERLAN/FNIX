<?php

/* mostramos error validando si existe */
function mostrarError($errores, $campo)
{
    $alerta = '';
    if (isset($errores[$campo]) && !empty($campo)) {
        $alerta = '<div class="alerta alerta-error">' . $errores[$campo] . '</div>';
    }
    return $alerta;
}
/* borramos sesiones */
function borrarErrores()
{
    unset($_SESSION['errores']);
    unset($_SESSION['completado']);

}

/* traemos la categorias de la BD */
function conseguirCategorias($conexion)
{
    $sql = "SELECT * FROM categorias ORDER BY id ASC;";
    $categorias = mysqli_query($conexion, $sql);
    $result = array();
    if ($categorias && mysqli_num_rows($categorias) >= 1) {
        $result = $categorias;
    }
    return $result;
}

/* traemos las entradas validando el ID que inicia sesion de la BD */
function conseguirEntradas($conexion)
{
    if (isset($_SESSION['usuario']['id'])) {
        $id = $_SESSION['usuario']['id'];
    } else {
        $id = 0;
    }


    $sql = "SELECT *
        FROM entradas e
        INNER JOIN categorias c ON e.categoria_id = c.id
        WHERE e.usuario_id = $id 
        ORDER BY e.id ASC LIMIT 4;";
    $entradas = mysqli_query($conexion, $sql);
    $result = array();
    if ($entradas && mysqli_num_rows($entradas) >= 1) {
        $result = $entradas;
    }
    return $result;
}
?>