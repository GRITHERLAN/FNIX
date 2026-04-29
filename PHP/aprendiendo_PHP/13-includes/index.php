<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Includes PHP</title>
</head>

<body>
    <!-- importa contenido o codigo desde otro archivo, tambien importa variables -->
    <?php
    include 'includes/cabecera.php';
    /* el include_once es para que solo se importe una sola vez el codigo no mas de una vez */
    /* el require obliga a que la ruta que se importe sea tal cual, si es incorrecta la pagina colapsa*/
    /* tambien existe require_once misma funcion */
    ?>
    <!-- CONTENIDO -->
    <div>
        <h2>Esta es la pagina de inicio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam officia tempora hic, corrupti,
            veritatis saepe reiciendis distinctio sunt veniam dolorem qui quia error libero ducimus impedit maiores
            sapiente natus.</p>
        <?php
        var_dump($nombre);
        ?>
    </div>
    <hr>
    <!-- footer -->
    <?php
    include 'includes/footer.php';
    ?>
</body>

</html>