const Articulo = require('../modelos/Articulo');
const { validarArticulo } = require('../helpers/validar');
const fs = require('fs');
const path = require('path');
const { log } = require('console');
const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: 'Soy una accion de prueba en mi controlador de articulos',
  });
};

const curso = (req, res) => {
  console.log('Se a ejecutado el endpoint probando');
  /* se declara estatos, codigo 200 es exitoso y se pone json cuando son explicitamente json */
  return res.status(200).json([
    {
      curso: 'master en react',
      autor: 'victor robles web',
      url: 'facebook',
    },
    {
      curso: 'master en react',
      autor: 'victor robles web',
      url: 'facebook',
    },
  ]);
};

const pruebamsj = (req, res) => {
  console.log('Se a ejecutado el endpoint probando');
  /* se declara estatos, codigo 200 es exitoso y send es lo que se mostrara por pantalla*/
  return res.status(200).send(
    `    <div>
      <h1>Empezando a crear api rest con node</h1>
    </div>`,
  );
};

const crear = async (req, res) => {
  /* recoger los parametros por post a guardar */
  const parametros = req.body;
  /* validar los datos */
  let validar = validarArticulo(req, res, parametros);
  /* crear el objeto */
  const articulo = new Articulo(parametros);
  /* asignar valores a objeto basado en el modelo (manual o automatico) */
  // articulo.titulo = parametros.titulo;
  /* guardar el articulo en la base de datos */
  console.log(validar);

  try {
    if (validar === undefined) {
      const articuloGuardado = await articulo.save();
      /* devolver resultado */
      return res.status(200).json({
        status: 'success',
        articulo: articuloGuardado,
        mensaje: 'articulo guardado',
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      msj: 'no se han guardado los datos',
    });
  }
};

const listar = async (req, res) => {
  /* consultas normales find, sort */

  try {
    const consulta = await Articulo.find({}).sort({ fecha: -1 }).limit(req.params.dato);
    return res.status(200).send({
      status: 'success',
      consulta,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'error',
      msj: 'no se han encontrado articulos',
    });
  }
};

const uno = async (req, res) => {
  /* recoger id por url */
  let id = req.params.id;
  /* buscar articulo  */
  try {
    const consulta = await Articulo.findById(id);
    return res.status(200).json({
      status: 'success',
      consulta,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'error',
      msj: 'no se han encontrado articulos',
    });
  }
  /* si no existe devolver error */
  /* devolver resultado */
};

const borrar = async (req, res) => {
  let articulo_id = req.params.id;

  try {
    const consulta = await Articulo.findOneAndDelete({ _id: articulo_id });
    return res.status(200).json({
      status: 'Articulo borrado',
      consulta,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'error',
      msj: 'no se han encontrado el articulo a eliminar',
    });
  }
};

const editar = async (req, res) => {
  /* recogger id de articulo */
  let articulo_id = req.params.id;
  /* recoger datos del body */
  const parametros = req.body;
  /* validar datos */
  validarArticulo(req, res, parametros);
  /* buscar y acturalizar articulo ,{ new: true } es para que devuelva el objeto actualizado */

  /* devolver respuesta */
  try {
    const consulta = await Articulo.findOneAndUpdate({ _id: articulo_id }, parametros, { new: true });
    return res.status(200).json({
      status: 'success',
      consulta,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      msj: 'no se ha podido actualizar',
    });
  }
};

const subir = async (req, res) => {
  /* configurar muter */
  /* recoger fichero de imagen para subirlo */
  console.log(req.file);
  /* validar existencia */
  if (!req.file) {
    return res.status(400).json({
      status: 'error',
      mensaje: 'peticion invalida',
    });
  } /* Nombre de archivo */
  let archivo = req.file.originalname;
  /* Extension del archivo, split se usa para separar depsues de un valor  */
  let archivo_split = archivo.split('.');
  let archivo_extension = archivo_split[1];
  /* comprobar extension correcta */
  if (archivo_extension != 'png' && archivo_extension != 'jpg' && archivo_extension != 'jpeg' && archivo_extension != 'gif') {
    /* borrar archivo y dar respuesta */
    fs.unlink(req.file.path, (err) => {
      return res.status(400).json({
        status: 'error',
        mensaje: 'Extension invalida',
      });
    });
  } else {
    /* recogger id de articulo */
    let articulo_id = req.params.id;
    /* recoger datos del body */
    /* validar datos */
    /* buscar y acturalizar articulo ,{ new: true } es para que devuelva el objeto actualizado */

    /* devolver respuesta */
    try {
      const consulta = await Articulo.findOneAndUpdate({ _id: articulo_id }, { imagen: req.file.filename }, { new: true });
      return res.status(200).json({
        status: 'success',
        consulta,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        msj: 'no se ha podido actualizar',
      });
    }
  }
};

const editarImg = async (req, res) => {
  /* recogger id de articulo */
  let articulo_id = req.params.id;
  /* recoger datos del body */
  /* validar datos */
  /* buscar y acturalizar articulo ,{ new: true } es para que devuelva el objeto actualizado */

  /* devolver respuesta */
  try {
    const consulta = await Articulo.findOneAndUpdate({ _id: articulo_id }, { imagen: req.file.filename }, { new: true });
    return res.status(200).json({
      status: 'success',
      consulta,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      msj: 'no se ha podido actualizar',
    });
  }
};

const imagen = (req, res) => {
  /* se recibe el nombre del fichero */
  let fichero = req.params.fichero;
  /* se parametriza la ruta de busqueda */
  let ruta_fisica = './imagenes/articulos/' + fichero;
  /* se usa fs.stat, para traer la imagen, con ruta fisica y callback que valida */
  fs.stat(ruta_fisica, (error, existe) => {
    if (existe) {
      return res.sendFile(path.resolve(ruta_fisica));
    } else {
      return res.status(404).json({
        status: 'error',
        msj: 'la imagen no existe',
      });
    }
  });
};

const buscador = async (req, res) => {
  /* sacar el string de busqueda */
  let busqueda = req.params.busqueda;
  /* find OR */
  /* Orden */
  try {
    /* se hace consulta donde traera consulta por coincidencia, el parametro $regrex y con condicional or */
    let consulta = await Articulo.find({
      $or: [{ titulo: { $regex: busqueda, $options: 'i' } }, { contendio: { $regex: busqueda, $options: 'i' } }],
    }).sort({ fecha: -1 });

    if (consulta.length == 0) {
      return res.status(404).json({
        status: 'error',
        msj: 'no se han encontrado articulos',
      });
    }
    return res.status(200).json({
      status: 'success',
      consulta,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'error',
      msj: err,
    });
  }
};

module.exports = {
  prueba,
  curso,
  pruebamsj,
  crear,
  listar,
  uno,
  borrar,
  editar,
  subir,
  editarImg,
  imagen,
  buscador,
};
