const express = require('express');
const router = express.Router();
const userController = require('../controllers/publication');

/* Definir Rutas */
router.get('/prueba-publicacion', userController.pruebaPublication);
/* Exportar Ruouter */
module.exports = router;
