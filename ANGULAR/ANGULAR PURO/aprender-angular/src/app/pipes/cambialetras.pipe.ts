import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "cambialetras"
})
export class CambiaLetrasPipe implements PipeTransform {
    transform(value: string, mayus: boolean = false) {
        let resultado: string = value.replaceAll("e", "3").replaceAll("i", "1")
        if (mayus) {
            resultado = resultado.toUpperCase()
        }
        return resultado
    }
}