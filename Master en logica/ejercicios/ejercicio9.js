function arraysComun(Array1, Array2) {

    let comun = Array1.filter(elemt => Array2.includes(elemt));

    console.log(comun);

}

arraysComun([2, 3, 4, 5, 6, 7, 8], [2, 4, 56, 6, 76, 7]);