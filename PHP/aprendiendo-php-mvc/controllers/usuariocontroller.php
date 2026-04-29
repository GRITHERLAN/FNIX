<?php

class UsuarioController
{
    public function mostrarTodos()
    {
        require_once 'models/usuariomodel.php';
        $usuario = new Usuario();
        $usuarios_mostrar = $usuario->conseguirTodos("usuarios");
        require_once "views/usuarios/mostrar-todos.php";
    }

    public function crear()
    {
        require_once 'views/usuarios/crear.php';
    }
}
?>