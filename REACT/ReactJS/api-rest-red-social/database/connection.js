const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mi_redsocial');
    console.log('Conectado correctamente a Bd: mi_redsocial');
  } catch (err) {
    console.log(err);
    throw new Error('no se ha podido conectar a la BD');
  }
};

module.exports = {
  connection,
};
