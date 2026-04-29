/* Helper de validacion */
const validator = require('validator');
const validarArticulo = (req, res, parametros) => {
  try {
    /* se valida si esta vacio, no debe estar vacio (!) */
    let validar_titulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo, { min: 5, max: 30 });
    let validar_contendio = !validator.isEmpty(parametros.contenido);

    if (!validar_titulo || !validar_contendio) {
      throw new Error('No se ha validado la informacion');
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: 'error',
      msj: 'Faltan datos por ingresar',
    });
  }
};

module.exports = { validarArticulo };
