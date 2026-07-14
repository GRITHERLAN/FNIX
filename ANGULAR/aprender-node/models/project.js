/* importar la libreria de mongoose */
const { model, Schema } = require("mongoose")

/* crear esquema ( estructura de cada documento de tipo proyecto) */
const ProjectSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        default: "Abierto",
        required: true
    },
    image: {
        type: String,
        default: "default.png"
    },
    create_at: {
        type: Date,
        default: Date.now()
    }
})

/* crear el modelo, indicarle la coleccion donde se van a guardar los documentos */
/* exportar modelo, el myproyects es el nombre de la coleccion, y Project es el nombre del modelo */
module.exports = model("Projectss", ProjectSchema, "myprojects")