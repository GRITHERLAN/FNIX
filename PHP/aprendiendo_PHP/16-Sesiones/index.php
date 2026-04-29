<?php
/* sesion : Almacenar y persistir datos del usuario mientras que navega en un
sitio web, hasta que cierra sesion o cierra el navegador */
/* Iniciar Sesion */
session_start();
/* variable local */
$variable_normal = "Soy una cadena de texto";
/* variable de sesion */
$_SESSION['variable_presistente'] = "Hola soy una sesion activa";

echo $variable_normal;
echo "<br>" . $_SESSION['variable_presistente'];
?>