/* se usa para importar la dependencias */
const mongoose = require('mongoose');

const conexion = async () => {
  try {
    /* se usa la url de conexion, con la BD creada o a usar */
    await mongoose.connect('mongodb://localhost:27017/mi_blog');
    console.log('conexion exitosa');
  } catch (error) {
    console.log(error);
    throw new Error('no se ha podido conectar a la base de datos');
  }
};

/* se exporta la variable o funcion o objeto */
module.exports  = {
    conexion
}