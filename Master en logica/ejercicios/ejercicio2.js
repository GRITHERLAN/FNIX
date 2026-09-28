function palindromos(word) {

    var palindromo = "";

    /* var palindromo = word.split('').reverse().join(''); */

    for (let i = word.length - 1; i >= 0; i--) {
        palindromo += word[i];
    }

    if (word == palindromo) {
        console.log("las palabras son iguales");

    } else {
        console.log("las palabras no son iguales");

    }

}

palindromos("bob");
