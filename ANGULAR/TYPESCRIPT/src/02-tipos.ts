/* Solo se usa let y const */

let nombre: string = "Nicolas";

// nombre = 234;

// nombre = true;

console.log(nombre);

console.log(typeof nombre);

const nacionalidad = "Colombiana";

// nacionalidad = "Albana";

/* string */

let pais: string = "Colombia";

/* number */

let anios: number = 25;

/* boolean */

let vivo: boolean = true;

/* any */

let cualquierCosa: any = 45;

/* arrays */

let lenguajes: string[] = ["js", "php", "python", "c"];

let decadas: Array<number | boolean> = [90, 877, 67, 56, true];

/* Tipos especiales */

let sinDefinir: undefined = undefined;

let nula: null = null;

/* Tipo Personalizado */

type alfanumerico = string | number;

let nombreYedad: alfanumerico = "victor" + 2;
