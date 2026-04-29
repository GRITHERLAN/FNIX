<aside id="sidebar">

    <?php if (!isset($_SESSION['error_login'])): ?>
        <?php if (isset($_SESSION['usuario'])): ?>
            <div id="usuario-logueado" class="bloque">
                <h3><?= $_SESSION['usuario']['nombre'] . ' ' . $_SESSION['usuario']['apellidos']; ?></h3>
                <a href="cerrar.php" class="boton boton-verde">Crear entradas</a>
                <a href="cerrar.php" class="boton boton">Crear categoria</a>
                <a href="cerrar.php" class="boton boton-naranja">Editar datos</a>
                <a href="cerrar.php" class="boton boton-rojo">Cerrar sesion</a>
            </div>
        <?php endif; ?>
    <?php else: ?>
        <div id="login" class="alerta alerta-error">
            <h3><?= $_SESSION['error_login'] ?></h3>
        </div>
        <?php
        unset($_SESSION['error_login']);
        ?>
    <?php endif; ?>



    <?php if (!isset($_SESSION['usuario'])): ?>
        <div id="login" class="bloque">
            <h3>Identificate</h3>
            <form action="login.php" method="POST">
                <label for="email">Email</label>
                <input type="email" name="email">

                <label for="password">Contraseña</label>
                <input type="password" name="password">

                <input type="submit" value="Entrar">
            </form>
        </div>
    <?php else: ?>
        <div></div>
    <?php endif ?>
    <div id="register" class="block-aside">
        <?php if (!isset($_SESSION['usuario'])): ?>
            <h3>Registrate</h3>
            <!-- Mostar Errores -->
            <?php if (isset($_SESSION['completado'])): ?>
                <div class="alerta alerta-exito">
                    <?= $_SESSION['completado']; ?>
                </div>
            <?php elseif (isset($_SESSION['errores']['general'])): ?>
                <div class="alerta alerta-error">
                    <?= $_SESSION['errores']['general'] ?>
                </div>
            <?php endif ?>

            <form action="registro.php" method="POST">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre">
                <?php
                echo isset($_SESSION['errores']) ? mostrarError($_SESSION['errores'], 'nombre') : ' ';

                ?>
                <label for="apellidos">Apellidos</label>
                <input type="text" name="apellidos">
                <?php
                echo isset($_SESSION['errores']) ? mostrarError($_SESSION['errores'], 'apellidos') : ' ';
                ?>
                <label for="email">Email</label>
                <input type="email" name="email">
                <?php
                echo isset($_SESSION['errores']) ? mostrarError($_SESSION['errores'], 'email') : ' ';
                ?>
                <label for="password">Contraseña</label>
                <input type="password" name="password">
                <?php
                echo isset($_SESSION['errores']) ? mostrarError($_SESSION['errores'], 'password') : ' ';
                ?>
                <input type="submit" name="submit" value="Registrar">
            </form>
        <?php else: ?>
            <div></div>
        <?php endif ?>
        <?php
        borrarErrores();
        ?>
    </div>
</aside>