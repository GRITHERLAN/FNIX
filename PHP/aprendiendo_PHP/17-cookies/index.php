<?php
/* cookie: es un fichero que se almacena en el ordenador de usuario que visiten la web con el fin de recordar datos
o rastrear el comportamiento del mismo en la web */
// crear cookie basica
setcookie("micookie", "Valor de mi galleta");
// cookie con expiracion
setcookie("unYear", "Valor de mi cookie de 365 dias", time() + (60 * 60 * 24 * 365));
header('Location:ver_cookies.php');
?>

<a href="ver_cookies.php">Ver las cookies</a>