function square(num) {

    let square = "";

    for (let i = 1; i <= num - 1; i++) {

        if (i == 1) {

            for (let i = 1; i <= num; i++) {
                square += "*"
            }

        } else if (i == num - 1) {

            square += "\n";

            for (let i = 1; i <= num; i++) {
                square += "*"
            }
        } else {

            square += "\n";

            for (let i = 1; i <= 2; i++) {
                
                square += "*"

                for (let i = 0; i < num - 2; i++) {
                    square += " ";
                }
            }

        }

    }

    console.log(square);
}

square(8);

