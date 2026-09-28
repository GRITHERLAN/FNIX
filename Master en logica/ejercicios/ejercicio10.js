function Escalera(num) {

    let escalera = "";
    let contador = 0;

    for (let i = 0; i < num; i++) {

        escalera += "[-]";
        escalera += "\n";
        contador++

        for (let i = 0; i < contador; i++) {
            escalera += "[-]";
        }

    }

    if (num == contador) {
        escalera += "[-]";
    }

    console.log(escalera);

}

Escalera(11)