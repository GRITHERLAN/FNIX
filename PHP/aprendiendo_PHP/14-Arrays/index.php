<?php
$peliculas = array('batman', 'superman', 'linterna verde');
$cantantes = ['bad bunny', 'eminem', 'drake'];
/* array asociativos */
$personas = array(
    'nombre' => 'nicolas',
    'apellidos' => 'valencia',
    'web' => 'facebook'
);
var_dump($peliculas[2]);
var_dump($cantantes[2]);
var_dump($personas);
/* recorrer con for */
echo "<h1>Listado de pelis</h1>";
echo "<ul>";
/* count cuenta elementos dentro de un array o cadenas */
for ($i = 0; $i < count($peliculas); $i++) {
    echo "<li>" . $peliculas[$i] . "</li>";
}
echo "</ul>";


/* blucle foreach */
echo "<h1>Listado de cantantes</h1>";
echo "<ul>";
foreach ($cantantes as $cantante) {
    echo "<li>" . $cantante . "</li>";
}
echo "</ul>";

/* array multidimensional */
$contactos = array(
    array('nombre' => 'nicolas', 'apellido' => 'valencia'),
    array('nombre' => 'luis', 'apellido' => 'ramirez'),
    array('nombre' => 'pedro', 'apellido' => 'picapiedra')
);
var_dump($contactos[0]['nombre']);

foreach ($contactos as $contacto) {
    var_dump($contacto['nombre']);
}



?>