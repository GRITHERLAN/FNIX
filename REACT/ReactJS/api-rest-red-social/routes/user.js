const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const autentication = require('../middlewares/auth');
/* Definir Rutas */
router.get('/prueba-usuario', autentication.auth, userController.pruebaUser);
router.get('/profile/:id', autentication.auth, userController.profile);
router.get('/list', autentication.auth, userController.list);
router.get('/list/:page', autentication.auth, userController.list);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update', autentication.auth, userController.update);
/* Exportar Ruouter */
module.exports = router;
