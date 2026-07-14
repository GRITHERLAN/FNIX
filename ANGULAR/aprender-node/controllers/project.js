const fs = require("fs")
const path = require("path")
const Project = require("../models/project")

/* Guardar */
const save = async (req, res) => {
    try {
        /* recibo datos */
        let body = req.body

        /* validar datos */
        if (!body.name || !body.description) {
            return res.status(400).send({
                status: "error",
                message: "faltan datos por enviar"
            })
        }

        /* crear objeto */
        let projectToSave = new Project(body)

        /* guardar en la bd */
        const project = await projectToSave.save()

        if (!project) {
            return res.status(404).send({
                status: "error",
                message: "el proyecto no se guardó"
            })
        }

        return res.status(200).send({
            status: "success",
            message: "datos guardados correctamente",
            project
        })

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "error al guardar datos",
            error
        })
    }

}

/* Listar */
const projectsList = async (req, res) => {
    try {

        let projectList = await Project.find()

        if (!projectList) {
            return res.status(404).send({
                status: "error",
                message: "No hay proyectos para mostar",
            })
        }

        return res.status(200).send({
            status: "success",
            projectList
        })

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "error al listar los proyectos",
            error
        })
    }
}

/* Listar por ID */

const oneProject = async (req, res) => {
    try {
        let id = req.params.id
        let oneProject = await Project.findById(id)

        if (!oneProject) {
            return res.status(404).send({
                status: "error",
                message: "No hay proyectos para mostar",
            })
        }

        return res.status(200).send({
            status: "success",
            oneProject
        })

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "error al listar el proyecto",
            error
        })
    }
}

/* Borrar proyecto por ID */
const deleteProject = async (req, res) => {
    try {
        let id = req.params.id
        let deleteProject = await Project.findById(id).deleteOne()

        if (!oneProject) {
            return res.status(404).send({
                status: "error",
                message: "No hay proyectos para mostar",
            })
        }

        return res.status(200).send({
            status: "success",
            deleteProject
        })

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "error al listar el proyecto",
            error
        })
    }
}

const update = async (req, res) => {
    try {
        let body = req.body
        let id = req.params.id
        if (!body || !id) {
            return res.status(404).send({
                status: "error",
                message: "No hay datos para actualizar",
            })
        }

        let updateProject = await Project.findByIdAndUpdate(id, body, { new: true })

        if (!updateProject) {
            return res.status(404).send({
                status: "error",
                message: "No Existe el proyecto",
            })
        }

        return res.status(200).send({
            status: "success",
            updateProject
        })
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "No Existe el proyecto",
            error
        })
    }


}

const updateState = async (req, res) => {
    try {
        let { state } = req.body
        let id = req.params.id

        if (!state || !id) {
            return res.status(404).send({
                status: "error",
                message: "No hay datos para actualizar",
            })
        }

        let updateProjectState = await Project.findByIdAndUpdate(id, { state: state }, { new: true })

        if (!updateProjectState) {
            return res.status(404).send({
                status: "error",
                message: "No Existe el proyecto",
            })
        }

        return res.status(200).send({
            status: "success",
            updateProjectState
        })
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "No Existe el proyecto",
            error
        })
    }


}


const upload = async (req, res) => {
    try {

        let id = req.params.id

        if (!req.file) {
            return res.status(404).send({
                status: "error",
                message: "No Existe el archivo",
            }
            )
        }

        let updateProjectFile = await Project.findByIdAndUpdate({ _id: id }, { image: req.file.filename }, { new: true })

        /* sacamos el path del destino del archivo */
        const filePath = req.file.path
        /* extraemos solo la extension del archivo subido */
        const extension = path.extname(req.file.originalname).toLowerCase().replace(".", "")

        /* determinamos reglas de extension de archivos */
        const validExtensions = ["png", "jpeg", "jpg", "gif"]

        /* hacemos validacion, si la extesion no existe en el arreglo, se eliminara el archivo */
        if (!validExtensions.includes(extension) || !updateProjectFile) {
            /* le indicamos el patch completo para que elimine el archivo */
            fs.unlink(filePath)

            return res.status(404).send({
                status: "error",
                message: "no es posible cargar el archivo la extension no es valida o no existe",
            }
            )
        }

        return res.status(200).send({
            status: "success",
            message: "metodo de subida",
            updateProjectFile
        })
    } catch (error) {
        return res.status(404).send({
            status: "error",
            message: "No Existe el archivo",
        }
        )
    }
}

const getimage = async (req, res) => {
    try {
        /* sacar el nombre del archivo */
        let file = req.params.file
        /* construir ruta del fichero */
        let filePath = "./uploads/images/" + file
        /* comprobar si existe */
        fs.stat(filePath, (error, exist) => {
            if (!error && exist) {
                /* devolver respuesta */
                return res.sendFile(path.resolve(filePath))
            } else {
                return res.status(404).send({
                    status: "error",
                    message: "la imagen no existes",
                })
            }
        })
    } catch (error) {
        return res.status(404).send({
            status: "error",
            message: "la imagen no existe",
        })
    }

}

module.exports = {
    save,
    projectsList,
    oneProject,
    deleteProject,
    update,
    upload,
    getimage,
    updateState
}