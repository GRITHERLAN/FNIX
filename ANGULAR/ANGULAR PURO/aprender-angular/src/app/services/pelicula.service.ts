import { Injectable } from "@angular/core";
import { PeliculaCine } from "../models/pelicula";

/* se importa este servicio en el componente que se usara */
@Injectable(

    /* {
    se usa para colocar a disposicion el servicio a todos los componentes
    providedIn: "root"

} */

)
export class PeliculaService {

    public peliculas: Array<PeliculaCine>

    constructor() {
        this.peliculas = [
            new PeliculaCine(1, "El padrino", "Mafie", "Copola", 1976, "Prime Video", false),
            new PeliculaCine(2, "El padrino 2", "Mafie", "Copola", 1976, "Prime Video", false)
        ]
    }

    getPelis(): Array<PeliculaCine> {
        return this.peliculas
    }

    saludoServicio() {
        console.log("Hola desde mi servicio");

    }
}