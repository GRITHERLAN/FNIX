<?php
/* importamos bd */
require_once 'config/database.php';

/* configuramos clase base */
class ModeloBase
{

    public $db;


    public function __construct()
    {
        $this->db = database::conectar();
    }

    public function conseguirTodos($tabla)
    {
        $query = $this->db->query("SELECT * FROM $tabla ORDER BY id DESC");
        return $query;
    }

}
?>