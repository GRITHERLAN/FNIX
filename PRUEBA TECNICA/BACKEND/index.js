const { pool } = require('./BD/conexion');

const express = require('express');
const cors = require('cors');
const rutas = require('./RUTAS/rutas');

const pruebaconexion = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conectado a PostgreSQL');
  } catch (err) {
    console.error('Error al conectar', err);
  }
};

pruebaconexion();

const app = express();
const puerto = 2031;
app.use(cors());
// Convertir body a objeto js
app.use(express.json()); // recibir datos con content-type app/json
app.use(express.urlencoded({ extended: true })); // form-urlencoded
app.set('view engine', 'pug');

app.use('/todo_app', rutas);

app.listen(puerto, () => {
  console.log('Servidor corriendo en el puerto ' + puerto);
});
