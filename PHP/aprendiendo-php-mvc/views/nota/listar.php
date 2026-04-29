<!-- se crea la vista con los datos que queremos que muestre, luego
 mostramos esto en el controlador -->
<h1><?= $nota->getTitulo(); ?></h1>
<h1><?= $nota->getDescripcion(); ?></h1>
<!-- hacemos fect_object para tratar los datos como objeto, tambien se podria usar fecth_assoc -->
<?php while ($nota = $notas->fetch_object()): ?>
    <h1>Nota: <?= $nota->titulo ?> fecha:
        <?= $nota->fecha ?>
    </h1>
<?php endwhile ?>