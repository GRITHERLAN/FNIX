/* cargar express(http) */
const express = require("express")
const router = express.Router()

/* Cargar controler */
const ProjectController = require("../controllers/project")

/* Configurar multer */

const multer = require("multer")

/* configurar creacion y destino de archivo */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/images")
    },
    filename: (req, file, cb) => {
        cb(null, "project-" + Date.now() + "-" + file.originalname)
    }
})

const upload = multer({ storage })

/* Definir Rutas, todo lo que se defina se guardara en router */
router.post("/save", ProjectController.save)
router.get("/list", ProjectController.projectsList)
router.get("/item/:id", ProjectController.oneProject)
router.delete("/delete-item/:id", ProjectController.deleteProject)
router.put("/update/:id", ProjectController.update)
router.put("/state/:id", ProjectController.updateState)
router.put("/upload/:id", upload.single("file0"), ProjectController.upload)
router.get("/item-image/:file", ProjectController.getimage)
/* Exportar rutas */
module.exports = router