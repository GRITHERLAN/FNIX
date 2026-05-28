/* permite parametrizar cual es el tipo de dato a devolver */
function getNombre(miNombre = "Nicolas") {
    return "Mi nombre es" + miNombre;
}
getNombre("andres");
let miFunc = (parametro) => {
    return parseInt(parametro);
};
miFunc("11");
export {};
