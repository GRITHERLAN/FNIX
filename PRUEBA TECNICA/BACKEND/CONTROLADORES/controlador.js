const { pool } = require('../BD/conexion');

const Tareas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
    res.status(200).send({ resultado: result.rows });
  } catch (err) {
    console.error('Error al obtener tareas:', err);
    res.status(500).send('Error del servidor');
  }
};

const Crear = async (req, res) => {
  try {
    const { title, completed } = req.body;

    // validación simple
    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'El campo title es obligatorio' });
    }

    const result = await pool.query(
      'INSERT INTO tasks (title, completed) VALUES ($1, $2) RETURNING *',
      [title.trim(), completed ?? false], // completed false si no se envía
    );

    const result2 = await pool.query('SELECT * FROM tasks ORDER BY id ASC');

    res.status(200).json({ resultado: result2.rows });
  } catch (err) {
    console.error('Error al insertar tarea:', err);
    res.status(500).json({ error: 'Error al insertar tarea' });
  }
};

const Editar = async (req, res) => {
  try {
    const { id } = req.params; // ID de la tarea a modificar
    const { title, completed } = req.body;
    // Validación básica
    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'El campo title es obligatorio' });
    }

    const result = await pool.query('UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *', [title, completed ?? false, id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    const result2 = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
    res.json({ resultado: result2.rows });
  } catch (err) {
    console.error('Error al actualizar tarea:', err);
    res.status(500).json({ error: 'Error al actualizar tarea' });
  }
};

const Eliminar = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.json({ message: 'Tarea eliminada correctamente', tarea: result.rows[0] });
  } catch (err) {
    console.error('Error al eliminar tarea:', err);
    res.status(500).json({ error: 'Error al eliminar tarea' });
  }
};

module.exports = {
  Tareas,
  Crear,
  Editar,
  Eliminar,
};
