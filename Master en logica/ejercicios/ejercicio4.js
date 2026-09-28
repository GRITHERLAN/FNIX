function palindromos(word) {

    var palindromo = "";

    for (let i = word.length - 1; i >= 0; i--) {
        palindromo += word[i];
    }

    return palindromo
}

console.log(palindromos("bodsadsadb"));

