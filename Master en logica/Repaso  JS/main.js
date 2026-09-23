var nombre = "Nicolas Andres Valencia";
var altura = 178;

var juntarVar = nombre + " " + altura;

/* escribe en html */
document.write(juntarVar);

/* utiliza una etiqueda especifica para incluir datos */
var datos = document.getElementById("datos");
datos.innerHTML = `
                    <h1>${juntarVar}</h1>
                    <h2>${nombre}</h2>
                    <h3>${altura}</h3>
`;

/* estructura de control */
if (altura >= 178) {
    datos.innerHTML += "<h1>eres una persona alta</h1>";
} else {
    datos.innerHTML += "<h1>eres una persona baja</h1>";
}

/* iteracion */
var lista = document.getElementById("lista");
for (let i = 0; i <= 4; i++) {
    lista.innerHTML += `<li> ${i} </li>`;
}

/* funciones */

function MuestraMiNombre(nombre, edad) {
    var datosPersolanes = `<h1>Tu nombre es: ${nombre} y edad es: ${edad}</h1>`;

    return datosPersolanes;
}

datos.innerHTML += MuestraMiNombre("Andres", 26);

/* Array */

var nombresVariados = ["Nicolas", "Andres", "Valencia", "Blandon"];

for (let i = 0; i < nombresVariados.length; i++) {
    lista.innerHTML += `<li> ${nombresVariados[i]} </li>`;
}

/* foreach */
nombresVariados.forEach((nombre) => {
    document.write("<h2>" + nombre + "</h2>")
})

/* reservar variables */
var equipo = "RM";
let pais = "Colombia";

if (true) {
    var equipo = "BAR";
    document.write("<h2>" + equipo + "</h2>");
    let pais = "España";
}

document.write("<h2>" + equipo + "</h2>");

document.write("<h2>" + pais + "</h2>");

/* constantes */

const cedula = 1007753357;

document.write("<h2>" + cedula + "</h2>");


/* JSON */
var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2026,
    modeloCompleto() {
        document.write("<h1>" + this.modelo + " " + this.maxima + " " + this.antiguedad + "</h1>");
    }
}

coche.modeloCompleto();

/* Promesas */

var saludar = new Promise((resolve, reject) => {

    setTimeout(() => {
        let saludo = "hola muy buenas a todos chavales";

        if (saludo) {
            resolve(saludo);
        } else {
            reject("no hay saludo disponible");
        }
    }, 2000)

})

saludar.then(resultado => {
    alert(resultado)
})
    .catch(error => {
        alert(error)
    })