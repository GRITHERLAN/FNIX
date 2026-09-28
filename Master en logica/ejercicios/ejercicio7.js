function impar(num1, num2) {

    let imparcount = 0;

    for (let i = num1; i <= num2; i++) {

        if ((i % 2) != 0) {
            imparcount++
        }

    }
    console.log(imparcount);
}

impar(1, 100);

