function invertir(num) {

    let covertir = String(num);

    let numinvert = "";

    for (let i = covertir.length - 1; i >= 0; i--) {

        numinvert += covertir[i];

    }

    console.log(parseInt(numinvert));


}

invertir(67)
