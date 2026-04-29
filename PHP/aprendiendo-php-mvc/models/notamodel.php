<?php

/* importamos modelo base y heredamos sus metodos de la clase */
require_once 'modelobase.php';

class Nota extends ModeloBase
{
    public $usuario_id;
    public $titulo;
    public $descripcion;

    // Getter y Setter de usuario_id
    public function getUsuarioId()
    {
        return $this->usuario_id;
    }

    public function setUsuarioId($usuario_id)
    {
        $this->usuario_id = $usuario_id;
    }

    // Getter y Setter de titulo
    public function getTitulo()
    {
        return $this->titulo;
    }

    public function setTitulo($titulo)
    {
        $this->titulo = $titulo;
    }

    // Getter y Setter de descripcion
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }

    public function __construct()
    {
        return parent::__construct();
    }

    public function guardar()
    {
        $sql = "INSERT INTO notas(id,usuario_id,titulo,descripcion,fecha) VALUES (NULL,'{$this->usuario_id}','{$this->titulo}','{$this->descripcion}', CURDATE())";

        $guardar = $this->db->query($sql);
        return $guardar;
    }

}
?>