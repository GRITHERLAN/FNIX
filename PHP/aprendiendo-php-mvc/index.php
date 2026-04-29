<h1>Bienvenido a mi web mvc</h1>
<?php
/* importamos las clases de todo el directorio */
include 'autoload.php';

/* controlamos flujo de tipo de clase y metodo , por GET*/
/* obtenemos clase */
if (isset($_GET['controller']) && class_exists($_GET['controller'] . 'Controller')) {
    $nombre_controlador = $_GET['controller'] . 'Controller';
    $controlador = new $nombre_controlador();
/* obtenemos metodo */
    if (isset($_GET['action']) && method_exists($controlador, $_GET['action'])) {
        $action = $_GET['action'];
        $controlador->$action();
    } else {
        echo "la pagina no existe";
    }


} else {
    echo "no existe la clase";
}




?>