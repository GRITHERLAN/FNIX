/* importar dependencias */
const connection = require("./database/connection")
const express = require("express")
const cors = require("cors")

/* conexion a la base de datos */
connection()

/* crear cervidor */
const app = express()
const port = 3977

/* configurar cors */
app.use(cors())

/* convertir datos del body a objetos */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* crear rutas */
const projectRoutes = require("./routes/project")

/* definimos prefijo de las rutas, ejemplo : localhost:3977/api/project/save */
app.use("/api/project", projectRoutes)

/* poner el servidor a escuchar */
app.listen(port, () =>
    console.log("el servidor esta corriendo correctamente")
)