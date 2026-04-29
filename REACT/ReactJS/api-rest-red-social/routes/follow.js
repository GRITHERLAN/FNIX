const express = require('express');
const router = express.Router();
const userController = require('../controllers/follow');

/* Definir Rutas */
router.get('/prueba-follow', userController.pruebaFollow);
/* Exportar Ruouter */
module.exports = router;
