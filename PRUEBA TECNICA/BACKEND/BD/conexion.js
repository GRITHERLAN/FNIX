// conexion.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Ej: 'postgres'
  host: 'localhost', // o la IP del servidor
  database: 'todo_app', // nombre de la BD
  password: '1234',
  port: 5432, // puerto por defecto de PostgreSQL
});

module.exports = { pool };
