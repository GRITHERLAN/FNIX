<?php
/* configuramos controlador */
class NotaController
{
    public function listar()
    {
        /* importamos la clase */
        require_once 'models/notamodel.php';
        /* la instanciamos */
        $nota = new nota();
        $nota->setTitulo("Nota");
        $nota->setDescripcion("Hola mundo PHP MVC Nota");
        $notas = $nota->conseguirTodos("notas");
        /* conectamos la vista y mostramos lo que contiene */
        require_once 'views/nota/listar.php';
    }

    public function crear()
    {
        require_once 'models/notamodel.php';
        $nota = new Nota();
        $nota->setUsuarioId(1);
        $nota->setTitulo("Matematicas");
        $nota->setDescripcion("Taller");
        $guardar = $nota->guardar();
        header("Location:index.php?controller=nota&action=listar");
    }

    public function borrar()
    {

    }

}
?>