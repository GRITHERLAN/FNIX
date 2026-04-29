<?php
require_once "conexion.php";
?>
<?php
require_once 'helpers.php';
?>
<!-- header -->
<header id="cabecera">
    <!-- LOGO -->
    <div id="logo">
        <a href="index.php">
            Blog de Videojuegos
        </a>
    </div>
    <!-- Menu -->
    <?php $categoria_2 = conseguirCategorias($db); ?>
    <nav id="menu">
        <ul>
            <li>
                <a href="index.php">Inicio</a>
            </li>
            <?php
            while ($categorias_list = mysqli_fetch_assoc($categoria_2)):
                ?>
                <li>
                    <a href="categoria.php?id=<?= $categorias_list['id'] ?>"><?= $categorias_list['nombre']; ?></a>
                </li>
                <?php
            endwhile;
            ?>

        </ul>
    </nav>
</header>

<div id="contenedor">