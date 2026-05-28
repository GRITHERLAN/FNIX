/* permite parametrizar cual es el tipo de dato a devolver */

function getNombre(miNombre: string = "Nicolas"): string {
  return "Mi nombre es" + miNombre;
}

getNombre("andres");

let miFunc = (parametro: string): number => {
  return parseInt(parametro);
};

miFunc("11");

