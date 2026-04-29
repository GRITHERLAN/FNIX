# Arquitectura Actual Del Proyecto

Este documento describe la arquitectura actual del proyecto tal como está implementada hoy. No propone una arquitectura ideal; documenta la estructura real para facilitar mantenimiento, aprendizaje y futuras mejoras.

## 1. Estilo Arquitectónico

El proyecto sigue una arquitectura MVC simple construida en PHP puro, sin framework.

Las tres piezas principales son:

- Modelo: acceso a datos y operaciones sobre entidades.
- Vista: renderizado HTML con PHP embebido.
- Controlador: coordinación entre petición, lógica del modelo y vista.

No existe una capa de servicios, repositorios, middlewares ni contenedor de dependencias.

## 2. Punto De Entrada

El punto de entrada único de la aplicación es `index.php`.

Desde este archivo se realiza todo el arranque global:

- inicio de sesión con `session_start()`
- carga del autoload
- carga de la configuración de base de datos
- carga de parámetros globales
- carga de helpers
- carga del layout principal
- resolución manual de rutas

Esto convierte a `index.php` en el front controller de la aplicación.

## 3. Flujo General De Una Petición

El flujo de ejecución actual es este:

1. El navegador hace una petición a `index.php`.
2. `index.php` carga los archivos base de configuración.
3. Se renderizan el header y el sidebar.
4. Se leen los parámetros `controller` y `action` desde la URL.
5. Se construye el nombre del controlador.
6. Se instancia el controlador correspondiente.
7. Se ejecuta el método de acción solicitado.
8. El controlador carga el modelo necesario.
9. El modelo consulta o modifica la base de datos.
10. El controlador prepara variables para la vista.
11. Se incluye la vista correspondiente.
12. Finalmente se renderiza el footer.

## 4. Capas Del Proyecto

### 4.1. Capa De Presentación

Está formada por los archivos dentro de `views/`.

Responsabilidades:

- mostrar HTML
- leer variables preparadas por el controlador
- renderizar formularios, tablas, listados y detalle de entidades

Características actuales:

- las vistas contienen PHP embebido directamente
- no hay motor de plantillas
- no hay componentes reutilizables más allá del layout común
- las vistas dependen de variables concretas creadas por el controlador

### 4.2. Capa De Control

Está formada por los archivos dentro de `controllers/`.

Responsabilidades:

- recibir la acción pedida por URL
- validar permisos de acceso
- leer datos de `$_GET`, `$_POST`, `$_FILES` y `$_SESSION`
- invocar modelos
- decidir la vista a renderizar
- redirigir tras operaciones de escritura

Características actuales:

- un controlador por módulo funcional
- acciones públicas como métodos de clase
- inclusión manual de modelos con `require_once`

Controladores actuales:

- `ProductoController`
- `CategoriaController`
- `UsuarioController`
- `CarritoController`
- `PedidoController`
- `ErrorController`

### 4.3. Capa De Datos Y Dominio

Está formada por los archivos dentro de `models/`.

Responsabilidades:

- representar entidades del sistema
- encapsular consultas SQL
- guardar, editar, borrar y consultar registros

Características actuales:

- cada modelo administra su propia conexión a BD
- la persistencia usa `mysqli`
- las consultas SQL se escriben manualmente
- no existe ORM

Modelos actuales:

- `Usuario`
- `Categoria`
- `Producto`
- `Pedido`

## 5. Estructura De Carpetas

### `controllers/`

Contiene la lógica de control y coordinación del flujo por módulo.

### `models/`

Contiene clases de acceso a datos y operaciones por entidad.

### `views/`

Contiene las vistas organizadas por módulo.

Subestructuras relevantes:

- `views/layout/`: layout compartido
- `views/producto/`: vistas de productos
- `views/categoria/`: vistas de categorías
- `views/usuario/`: registro y acceso de usuario
- `views/carrito/`: vista del carrito
- `views/pedido/`: creación, confirmación y detalle de pedidos

### `config/`

Contiene configuración global.

Archivos actuales:

- `db.php`: clase de conexión a base de datos
- `parameters.php`: constantes globales como `base_url`

### `helpers/`

Contiene funciones auxiliares de uso transversal.

Actualmente existe `utils.php`, que centraliza:

- validación de permisos
- limpieza de sesiones
- estadísticas del carrito
- obtención de categorías para el menú
- traducción básica del estado del pedido

### `assets/`

Contiene recursos estáticos del frontend:

- `css/`
- `img/`

### `uploads/`

Contiene archivos subidos por usuarios o administración.

Actualmente se usa `uploads/images/` para imágenes de productos.

### `database/`

Contiene el script SQL base del proyecto.

## 6. Sistema De Enrutamiento

El proyecto no usa rutas declarativas ni un router de framework.

El enrutamiento es manual:

- `index.php` toma `$_GET['controller']`
- concatena el sufijo `Controller`
- valida si la clase existe
- crea el objeto controlador
- ejecuta `$_GET['action']` si el método existe

Formato típico de URL:

- `producto/index`
- `producto/ver&id=3`
- `usuario/registro`
- `pedido/detalle&id=5`

El sistema depende de reglas de reescritura o del patrón de URL esperado por el entorno local.

## 7. Sistema De Carga

La carga de clases se apoya en `autoload.php`.

Características:

- el autoload solo resuelve controladores
- cada controlador importa manualmente sus modelos
- helpers y configuración se cargan desde `index.php`

Esto significa que la aplicación tiene una carga híbrida:

- automática para controladores
- manual para modelos y helpers

## 8. Gestión De Estado

El estado de la aplicación depende fuertemente de `$_SESSION`.

Usos principales:

- autenticación del usuario
- control de rol administrador
- almacenamiento del carrito
- mensajes temporales de éxito o error

La sesión es una pieza central de la arquitectura actual, especialmente para:

- login
- permisos
- proceso de compra
- persistencia del carrito entre peticiones

## 9. Integración Con La Base De Datos

La clase `Database` vive en `config/db.php` y expone un método estático `connect()`.

Patrón actual:

- `index.php` carga la definición de la clase
- cada modelo llama `Database::connect()` en su constructor
- la conexión se guarda en `$this->db`

Esto permite que cada modelo use la misma forma de conexión sin inyección explícita de dependencias.

## 10. Módulos Funcionales

### Productos

Permite:

- listar productos destacados
- ver detalle
- crear productos
- editar productos
- eliminar productos
- filtrar por categoría

### Categorías

Permite:

- crear categorías
- listar categorías
- ver productos de una categoría

### Usuarios

Permite:

- registro
- login
- logout

### Carrito

Permite:

- agregar productos
- ver el carrito
- aumentar o disminuir unidades
- eliminar líneas
- vaciar el carrito

### Pedidos

Permite:

- generar un pedido a partir del carrito
- guardar líneas del pedido
- mostrar confirmación
- consultar pedidos del usuario
- consultar detalle
- gestionar estado desde administración

## 11. Layout Compartido

La aplicación usa un layout global ensamblado desde `index.php`.

Piezas:

- `views/layout/header.php`
- `views/layout/sidebar.php`
- `views/layout/footer.php`

Particularidades:

- el header consulta categorías para construir el menú
- el sidebar consulta estadísticas del carrito
- el sidebar cambia según el estado de sesión del usuario

Esto hace que parte de la lógica de presentación esté acoplada al layout global.

## 12. Patrón De Respuesta

El patrón de respuesta actual tiene dos formas principales:

- renderizado de vistas para operaciones de lectura
- redirección con `header("Location:...")` después de operaciones de escritura

Casos comunes:

- formularios `POST` que guardan datos y luego redirigen
- acciones protegidas que redirigen al inicio si el usuario no tiene permisos

## 13. Acoplamientos Importantes

La arquitectura actual presenta varios acoplamientos que conviene conocer:

- `index.php` controla el flujo global completo
- las vistas dependen de variables con nombres concretos
- el layout depende de helpers y sesiones
- los controladores dependen directamente de `$_GET`, `$_POST`, `$_FILES` y `$_SESSION`
- los modelos dependen directamente de `mysqli`
- la configuración está acoplada a constantes globales como `base_url`

## 14. Fortalezas De La Arquitectura Actual

- Es simple de entender para aprendizaje.
- Tiene separación básica entre controlador, modelo y vista.
- Permite ampliar módulos sin introducir herramientas externas.
- La navegación general del sitio está centralizada.

## 15. Limitaciones De La Arquitectura Actual

- Hay fuerte dependencia de variables globales y sesiones.
- No hay separación entre lógica de dominio y acceso a datos.
- El autoload es parcial.
- No existe manejo centralizado de errores o excepciones.
- Hay lógica repartida entre vistas, helpers y controladores.
- La configuración y credenciales están dentro del código.
- La base de datos se consume mediante SQL manual.

## 16. Resumen Arquitectónico

La aplicación actual puede resumirse así:

- Un `front controller` central en `index.php`
- Un MVC manual y ligero
- Estado manejado con sesiones
- Persistencia con `mysqli`
- Layout global compartido
- Módulos funcionales separados por carpeta

Es una arquitectura pequeña, directa y orientada al aprendizaje, adecuada para una tienda básica sin framework.
