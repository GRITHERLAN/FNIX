for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue;//ir a la siguiente iteracion
    }else // al cumplirse la condicion de (contador(0) % 2 !== 0) sedera paso y seguira el ciclo haciendo que la siguiente iteracion no se cumpla (contador(1) % 2 !== 0) y mande a else a realizar el proceso(imprimir el numero par)
    console.log(contador);
}