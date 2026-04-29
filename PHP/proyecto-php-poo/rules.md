# Reglas Actuales Del Proyecto

Este documento resume las reglas y convenciones que el proyecto ya sigue en su estado actual. Describe el comportamiento real del código para que cualquier cambio nuevo respete el contexto existente.

## 1. Arquitectura General

- El proyecto está construido en PHP puro con una estructura MVC simple.
- El punto de entrada único es `index.php`.
- Los controladores viven en la carpeta `controllers/`.
- Los modelos viven en la carpeta `models/`.
- Las vistas viven en la carpeta `views/`.
- Los recursos estáticos viven en `assets/`.
- Las imágenes subidas por productos se guardan en `uploads/images/`.

## 2. Enrutamiento

- El enrutamiento se resuelve manualmente desde `index.php`.
- Las rutas se basan en los parámetros `controller` y `action`.
- Si no se envían `controller` ni `action`, se usa el controlador por defecto definido en `config/parameters.php`.
- El controlador por defecto actual es `ProductoController`.
- La acción por defecto actual es `index`.
- Si el controlador o la acción no existen, se ejecuta `show_error()`.

## 3. Carga De Clases

- `autoload.php` registra un autoload solo para controladores.
- La convención del autoload es incluir archivos desde `controllers/` usando el nombre de clase recibido.
- Los modelos no se autoloadan automáticamente.
- Cada controlador incluye manualmente el modelo que necesita con `require_once`.

## 4. Configuración Global

- `index.php` carga al inicio:
  - `autoload.php`
  - `config/db.php`
  - `config/parameters.php`
  - `helpers/utils.php`
- El layout general también se carga desde `index.php`:
  - `views/layout/header.php`
  - `views/layout/sidebar.php`
  - `views/layout/footer.php`

## 5. Base De Datos

- La conexión a base de datos se define en `config/db.php`.
- La conexión usa `mysqli`.
- La base de datos configurada actualmente es `tienda_master`.
- Las credenciales están escritas directamente en el código.
- Los modelos crean su propia conexión con `Database::connect()` en el constructor.
- El esquema principal está en `database/database.sql`.

## 6. Tablas Principales

- `usuarios`
- `categorias`
- `productos`
- `pedidos`
- `lineas_pedidos`

## 7. Sesiones Y Estado

- La sesión se inicia al comienzo de `index.php` con `session_start()`.
- La autenticación del usuario se guarda en `$_SESSION['identity']`.
- El rol administrador se marca con `$_SESSION['admin']`.
- El carrito se guarda completo en `$_SESSION['carrito']`.
- Los mensajes de resultado de acciones se guardan en variables de sesión como:
  - `register`
  - `producto`
  - `delete`
  - `pedido`
  - `error_login`

## 8. Reglas De Acceso

- Las validaciones de acceso se centralizan en `helpers/utils.php`.
- `Utils::isAdmin()` protege acciones exclusivas del administrador.
- `Utils::isIdentity()` protege acciones que requieren usuario autenticado.
- Si no se cumple la validación, el flujo redirige a `base_url`.

## 9. Reglas Del Carrito

- El carrito funciona en sesión, no en base de datos.
- Cada elemento del carrito guarda:
  - `id_producto`
  - `precio`
  - `unidades`
  - `producto`
- Si un producto ya existe en el carrito, al volver a agregarlo se incrementa `unidades`.
- El carrito permite:
  - listar productos
  - aumentar unidades
  - disminuir unidades
  - eliminar una línea
  - vaciar todo el carrito

## 10. Reglas De Usuarios

- El registro crea usuarios con rol por defecto `user`.
- El login busca por email y valida la contraseña con `password_verify`.
- Si el usuario autenticado tiene rol `admin`, se activa `$_SESSION['admin'] = true`.
- El logout elimina `identity` y `admin` de la sesión.

## 11. Reglas De Productos

- Los productos pertenecen a una categoría mediante `categoria_id`.
- La portada muestra productos aleatorios con `getRandom(6)`.
- La gestión de productos es solo para administradores.
- Crear y editar productos usan el mismo formulario base.
- La imagen del producto es opcional.
- Si se sube imagen, se guarda en `uploads/images/`.
- Los tipos MIME aceptados actualmente son:
  - `image/jpg`
  - `image/jpeg`
  - `image/png`
  - `image/gif`

## 12. Reglas De Categorías

- Las categorías aparecen en el menú principal del layout.
- Las categorías se obtienen desde la base de datos en cada carga del header.
- La gestión de categorías es solo para administradores.
- Una categoría permite listar sus productos asociados.

## 13. Reglas De Pedidos

- Solo un usuario autenticado puede crear pedidos.
- Para crear un pedido se solicitan:
  - `provincia`
  - `localidad`
  - `direccion`
- El coste del pedido se calcula desde el total del carrito.
- Al guardar un pedido se crean también sus líneas en `lineas_pedidos`.
- El estado inicial del pedido es `confirm`.
- Un usuario autenticado puede ver sus pedidos y el detalle de cada pedido.
- Un administrador puede ver todos los pedidos y cambiar su estado.

## 14. Layout Y UI

- El diseño principal usa un layout fijo con:
  - cabecera
  - menú horizontal
  - barra lateral
  - contenido central
  - pie de página
- La barra lateral muestra:
  - resumen del carrito
  - login si no hay sesión
  - accesos de usuario si hay sesión
  - accesos de administración si el usuario es admin
- El estilo visual se define principalmente en `assets/css/styles.css`.
- Existe una maqueta estática previa en `index_maqueta.php`.

## 15. Convenciones De Implementación

- El proyecto usa `require_once` para cargar dependencias.
- La lógica está repartida entre controladores, modelos, helpers y vistas sin una capa adicional de servicios.
- Las redirecciones se hacen con `header("Location:...")`.
- Muchas vistas dependen de variables preparadas previamente por el controlador.
- El código mezcla nombres y comentarios en español.

## 16. Limitaciones Y Fragilidades Actuales

- Hay textos con problemas de codificación de caracteres.
- El autoload no cubre modelos ni helpers.
- Hay consultas SQL armadas por concatenación.
- Las credenciales de la base de datos están hardcodeadas.
- El archivo `database.sql` inserta un admin con contraseña sin hash, mientras el login real espera contraseñas hasheadas.
- `Utils::showStatus()` contiene una asignación en lugar de una comparación en el caso `sended`.

## 17. Regla Práctica Para Cambios Nuevos

- Cualquier mejora futura debería respetar la estructura MVC actual mientras no se acuerde una refactorización mayor.
- Si se modifica una funcionalidad existente, conviene mantener:
  - la convención de rutas actual
  - el uso de sesiones para carrito y autenticación
  - el layout global cargado desde `index.php`
  - la separación actual entre controladores, modelos y vistas
