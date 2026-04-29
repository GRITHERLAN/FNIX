<?php
if (isset($_COOKIE['micookie'])) {
    /* borramos cookie */
    unset($_COOKIE['micookie']);
    /* aqui forzamos la eliminacion inmediata de la cookie */
    setcookie('micookie', '', time() - 100);
    unset($_COOKIE['unYear']);
    /* aqui forzamos la eliminacion inmediata de la cookie */
    setcookie('unYear', '', time() - (60 * 60 * 24 * 366));
}

/* si le dan click para entrar a esta pagina headre lo que hace es redireccionar instantaneamente
a la pagina especificada */
header('Location:ver_cookies.php');

?>