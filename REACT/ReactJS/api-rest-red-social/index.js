/* importar dependencias */
const { connection } = require('./database/connection');
const express = require('express');
const cors = require('cors');
/* Mensaje de bienvenida */
console.log('Api node para red social arrancada');

/* conexion a BD */
connection();
/* Crear servidor node */
const app = express();
const puerto = 2031;
/* Configurar cors */
app.use(cors());
/* Convertir los datos del body a objetos js */
app.use(express.json()); /* middleware que decodifica para que los datos que lleguen sean json */
app.use(express.urlencoded({ extended: true })); /* esto es para que cualquier dato por formato urlencoded lo convierte a json */
/*Cargar conf rutas  */
const userRoutes = require('./routes/user');
const publicationRoutes = require('./routes/publication');
const followRoutes = require('./routes/follow');

app.use('/api/user', userRoutes);
app.use('/api/publication', publicationRoutes);
app.use('/api/follow', followRoutes);
/* Poner a servidor aescuchar */

app.listen(puerto, () => {
  console.log('Servidor de node corriendo en el puerto: ' + puerto);
});
