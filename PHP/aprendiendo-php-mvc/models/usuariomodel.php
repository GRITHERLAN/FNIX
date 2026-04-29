<?php
/* importamos modelo base y heredamos sus metodos de la clase */
require_once 'modelobase.php';

class Usuario extends ModeloBase
{
    public $nombre;
    public $apellidos;
    public $email;
    public $password;

    public function __construct()
    {
        parent::__construct();
    }

    // Getter y Setter para nombre
    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    // Getter y Setter para apellidos
    public function getApellidos()
    {
        return $this->apellidos;
    }

    public function setApellidos($apellidos)
    {
        $this->apellidos = $apellidos;
    }

    // Getter y Setter para email
    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    // Getter y Setter para password
    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

}

?>