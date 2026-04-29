const express = require('express');
const controlRutas = require('../CONTROLADORES/controlador.js');
const router = express.Router();

router.get('/tareas', controlRutas.Tareas);
router.post('/creart', controlRutas.Crear);
router.put('/editar/:id', controlRutas.Editar);
router.delete('/eliminar/:id', controlRutas.Eliminar);
module.exports = router;
