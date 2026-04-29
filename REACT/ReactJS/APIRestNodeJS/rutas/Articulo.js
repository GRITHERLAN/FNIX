const express = require('express');
const multer = require('multer');
const ArticuloControlador = require('../controladores/articulo');

/* multer es para posiblitar la subida de imagenes */

const almacenamiento = multer.diskStorage({
  /* recibe 3 parametros, peticion, archivo y ruta */
  destination: (req, file, cb) => {
    /* siempre es null */
    cb(null, './imagenes/articulos');
  },
  /* se parametriza que nombre de registro se tendra cuando se suba la img */
  filename: (req, file, cb) => {
    cb(null, 'articulo' + Date.now() + file.originalname);
  },
});

const subidas = multer({ storage: almacenamiento });

/* confiuguracion de rutas */
const router = express.Router();

/* rutas GET */
router.get('/ruta-de-prueba', ArticuloControlador.prueba);
router.get('/curso', ArticuloControlador.curso);
router.get('/pruebamsj', ArticuloControlador.pruebamsj);
router.get('/articulos', ArticuloControlador.listar);
router.get('/articulos/:dato', ArticuloControlador.listar);
router.get('/articulo/:id', ArticuloControlador.uno);
router.get('/imagen/:fichero', ArticuloControlador.imagen);
router.get('/buscar/:busqueda', ArticuloControlador.buscador);
/* Ruta POST */
router.post('/crear', ArticuloControlador.crear);
router.post('/subir-imagen/:id', [subidas.single('file0')], ArticuloControlador.subir);
/* RUTA PUT */
router.put('/articulo/:id', ArticuloControlador.editar);
router.put('/articuloimg/:id', [subidas.single('file0')], ArticuloControlador.editarImg);
/* se pone single al ser solo un solo archivo */
router.delete("/articulo/:id", ArticuloControlador.borrar);
module.exports = router;
