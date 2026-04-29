<?php
require_once 'includes/conexion.php';
?>
<?php
require_once 'includes/helpers.php';
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog de Videojuegos</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <?php
    require_once 'includes/cabecera.php';
    ?>


    <!-- SideBar -->
    <?php
    require_once 'includes/lateral.php';
    ?>
    <!-- content -->
    <div id="principal">
        <h1>Ultimas Entradas</h1>
        <?php
        $entrada_2 = conseguirEntradas($db);
        ?>
        <?php
        if (!empty($entrada_2)):
            ?>
            <?php
            while ($entrada_list = mysqli_fetch_assoc($entrada_2)):
                ?>
                <article class="entrada">
                    <h2><?= $entrada_list['titulo']; ?></h2>
                    <span><?= $entrada_list['nombre'] . " | " .
                        $entrada_list['fecha'] ?></span>
                    <p><?= $entrada_list['descripcion']; ?></p>
                </article>
                <?php
            endwhile;
            ?>
            <?php
        else:
            ?>
            <h1>Logueate y crea tus entradas</h1>
            <?php
        endif;
        ?>



        <div id="ver-todas">
            <a href="">Ver todas las entradas</a>
        </div>
    </div>


    <!-- footer -->
    <?php
    require_once 'includes/pie.php';
    ?>
</body>

</html>