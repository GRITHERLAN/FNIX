import { Pipe, PipeTransform } from "@angular/core";

/* se crea el pipe con el decorador */
@Pipe({
    name: "cambialetras"
})
/* se implementa la interface PipeTransform */
export class CambiaLetrasPipe implements PipeTransform {
    /* recibe dos parametros */
    transform(value: string, mayus: boolean = false) {
        let resultado: string = value.replaceAll("e", "3").replaceAll("i", "1")
        if (mayus) {
            resultado = resultado.toUpperCase()
        }
        return resultado
    }
}