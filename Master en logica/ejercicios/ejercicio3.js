function searchword(text, word) {

    let textClear = text.toLowerCase().replace(/[!¡.,-]/gi, '');
    let resultado = 0;

    if (textClear.includes(word)) {
        let words = textClear.split(' ');
        let map = {};

        for (let wordone of words) {

            if (map[wordone]) {
                map[wordone]++;
            } else {
                map[wordone] = 1;
            }

        }

        resultado = map[word];

    } else {
        resultado = 0;
    }

    return resultado;

}

console.log(searchword("hola se es hola", "hola"));
