<?php
/* se crea session */
session_start();
/* se instancia el auto carga de clases */
require_once 'autoload.php';

/* se llama la BD para usarse en todo el proyecto */
require_once 'config/db.php';

/* se llama parameters para hacer uso de sus define's */
require_once 'config/parameters.php';

/* se isntancia los helpers apra su uso */
require_once 'helpers/utils.php';

require_once 'views/layout/header.php';
require_once 'views/layout/sidebar.php';

/* se crea un metodo que muestre el error */
function show_error()
{
	/* se instancia la clase */
	$error = new errorController();

	/* se llama a la accion */
	$error->index();
}


/* recibir controlador por URL */
if (isset($_GET['controller'])) {

	/* se crea controlador concatenandole "Controller" estandarizandolo */
	$nombre_controlador = $_GET['controller'] . 'Controller';

	/* si no existe se le asignara un controlador por defecto */
} elseif (!isset($_GET['controller']) && !isset($_GET['action'])) {
	$nombre_controlador = controller_default;

	/* si se le ingresa y el controlador no existe saldra el error */
} else {
	show_error();
	exit();
}



/* se valida si la clase existe "Nombre Clase""Controlador" */
if (class_exists($nombre_controlador)) {
	/* se instancia el controlador que se recibio por URL y se asigna*/
	$controlador = new $nombre_controlador();

	/* se valida si existe el metodo */
	if (isset($_GET['action']) && method_exists($controlador, $_GET['action'])) {

		/* se le asigna a la variable */
		$action = $_GET['action'];

		/* se llama a la accion del controlador */
		$controlador->$action();

		/* si no existe mostrara algo por defecto */
	} elseif (!isset($_GET['controller']) && !isset($_GET['action'])) {

		$action_default = action_default;

		$controlador->$action_default();

	} else {
		show_error();
	}
} else {
	show_error();
}



/* se crea vista footer */
require_once 'views/layout/footer.php';


