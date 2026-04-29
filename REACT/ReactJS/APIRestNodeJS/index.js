/* se importa la conexion */
const { conexion } = require('./basedatos/conexion');
const express = require('express');
const cors = require('cors');
/* inicializa la conexion */
conexion();

/* crear servidor de Node */
const app = express();

const puerto = 3900;

/*app.use sirve apra ejecutar middleware o rutas, Configurar el cors, se ejecuta antes de una ruta */
app.use(cors());

/* convertir body a objeto JS, lo parsea */
app.use(express.json()); /* recibir datos con application/json */
app.use(express.urlencoded({ extended: true })); /* recibe form-urlencoded */
/* crear rutas */

const rutas_articulo = require('./rutas/Articulo');
/* se usa rutas_articulo para importar todas las configuraciones de rutas de la carpeta rutas  */
app.use('/api', rutas_articulo);
/* crear servidor y escuchar petciciones */
app.listen(puerto, () => {
  console.log('Servidor corriendo en el puerto ' + puerto);
});
