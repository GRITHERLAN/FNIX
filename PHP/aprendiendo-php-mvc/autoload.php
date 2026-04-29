<?php
/* cargamos clases automaticamente */
function autocargar_clases($class)
{
    include 'controllers/' . $class . '.php';
}

spl_autoload_register('autocargar_clases');
?>