<?php while ($usuario = $usuarios_mostrar->fetch_object()): ?>
    <h1>Nombre: <?= $usuario->nombre ?> fecha:
        <?= $usuario->fecha ?>
    </h1>
<?php endwhile ?>