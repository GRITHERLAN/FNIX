/* importar dependencias y modulos */
const bcrypt = require('bcrypt');
const User = require('../models/user');
const mongoosePaginate = require('mongoose-pagination');

/* importar servicion */
const jwt = require('../services/jwt');
/* recoger datos peticion */

/* Acciones de prueba */
const pruebaUser = (req, res) => {
  return res.status(200).send({ message: 'Mensaje enviado desde: controllers/user.js', usuario: req.user });
};

/* Registro de usuarios */
const register = async (req, res) => {
  /* Recoger datos de la peticion */
  const params = req.body;
  /* Comprobar que me llegan todos los datos */
  if (!params.name || !params.email || !params.password || !params.nick) {
    return res.status(400).json({
      status: 'Error',
      message: 'Faltan datos por enviar',
    });
  }
  /* Control de usuarios Duplicados */
  try {
    const consult = await User.find({
      $or: [
        {
          email: params.email.toLowerCase(),
        },
        {
          nick: params.nick.toLowerCase(),
        },
      ],
    });
    if (consult && consult.length >= 1) {
      return res.status(200).json({
        message: 'El usuario ya existe',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'error en la consulta',
      error,
    });
  }
  /* Cifrar la clave  */
  let pwd = await bcrypt.hash(params.password, 10);
  params.password = pwd;

  /* Crear objetos de usuario */
  const userObj = new User(params);
  /* Guardar usuario en la BD */
  try {
    const save = await userObj.save();
  } catch (err) {
    return res.status(500).json({
      message: 'Error en guardar Datos',
    });
  }
  /* devolver resultado */
  return res.status(200).json({
    message: 'Accion de registro de usuarios',
    userObj,
  });
};

const login = async (req, res) => {
  /* recoger parametros body */
  let params = req.body;
  if (!params.email || !params.password) {
    return res.status(400).send({
      status: 'Error',
      message: 'Faltan datos por enviar',
    });
  }
  /* buscar en BD si existe el user */
  const consult = await User.findOne({ email: params.email }).select({ password: 0 });

  if (!consult) {
    return res.status(404).json({
      message: 'El usuario no existe',
    });
  }
  /* comprobrar contraseña si es correcta */
  const { password } = await User.findOne({ email: params.email }).select({ _id: 0, password: 1 });

  let pwd = await bcrypt.compareSync(params.password, password);

  if (!pwd) {
    return res.status(400).json({
      message: 'La clave es incorrecta',
    });
  }
  /* TOKEN se le debe pasar lo que consultamos en la BD, este mandara la consulta a el archivo jwt.js en services y creara el token retornando el valor codificado*/
  const token = jwt.createToken(consult);
  /* Datos de usuario */
  return res.status(200).json({
    message: 'Login correctamente',
    user: {
      id: consult._id,
      name: consult.name,
      nick: consult.nick,
    },
    token,
  });
};

const profile = async (req, res) => {
  /* recibir parametro de ID de usuario por url */
  const id = req.params.id;
  /* consulta para sacar datos del usuario */
  try {
    const consult = await User.findById(id).select({ password: 0, role: 0 });
    /* Devolver resultado */
    return res.status(200).json({
      message: 'success',
      user: consult,
    });
  } catch (err) {
    return res.status(404).json({
      message: 'El usuario no existe',
    });
  }
};

const list = async (req, res) => {
  /* controlar en que pagina estamos */
  let page = 1;
  if (req.params.page) {
    page = req.params.page;
  }
  page = parseInt(page);
  /* consulta mongoose paginate */
  let pageItems = 5;
  /* se filtra el numero que registros que queremos mostrar con paginate */
  const consult = await User.find().sort('_id').paginate(page, pageItems);
  const consult2 = await User.find().sort('_id');
  return res.status(200).json({
    message: 'success',
    consult,
    pageItems,
    page,
    pages: Math.ceil(consult2.length / pageItems),
  });
};

const update = async (req, res) => {
  /* recoger info de usuario a actualizar */
  let userToUpdate = req.body;
  let userIdentity = req.user;
  /* eliminar campos sobrantes */
  delete userIdentity.iat;
  delete userIdentity.exp;
  delete userIdentity.role;
  delete userIdentity.image;
  /* comprobar si el usuario ya existe */
  try {
    const consult = await User.findOne({
      $or: [
        {
          email: userToUpdate.email.toLowerCase(),
        },
        {
          nick: userToUpdate.nick.toLowerCase(),
        },
      ],
    }).select({ _id: 1 });

    let userIsset = false;
    let ID = consult._id.toString();
    if (ID != userIdentity.id) {
      userIsset = true;
    }

    if (userIsset) {
      return res.status(200).json({
        message: 'El usuario ya existe',
      });
    }
    /* si me llega la password cifrarla */
    if (userToUpdate.password) {
      /* Cifrar la clave  */
      let pwd = await bcrypt.hash(userToUpdate.password, 10);
      userToUpdate.password = pwd;
    }
  } catch (error) {
    return res.status(500).json({
      message: 'error en la consulta',
      error,
    });
  }
  /* buscar y actualizar */
  let update = await User.findByIdAndUpdate(userIdentity.id, userToUpdate, { new: true });
  return res.status(200).json({
    message: 'success',
    update,
  });
};

module.exports = { pruebaUser, register, login, profile, list, update };
