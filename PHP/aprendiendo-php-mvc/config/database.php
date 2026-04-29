<?php
/* configuramos la BD */
class database
{
    public static function conectar()
    {
        $conexion = new mysqli("localhost", "root", "Grither2031**", "notas_master");
        $conexion->query("SET NAMES 'utf8'");
/* retornamos conexion */
        return $conexion;
    }
}
?>