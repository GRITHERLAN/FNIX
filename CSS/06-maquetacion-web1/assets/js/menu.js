document.addEventListener("DOMContentLoaded", (e) => {
    let boton = document.querySelector(".layout__menu-toggle");
    let aside = document.querySelector(".layout__aside");
    let xmark = document.querySelector(".fa-xmark");
    let bars = document.querySelector(".fa-bars");

    boton.addEventListener("click", (e) => {

        let visible = document.querySelector(".layout__aside--visible");

        if (!visible) {
            boton.classList.add("layout__menu-toggle--izq")
            aside.classList.add("layout__aside--visible");
            xmark.classList.add("menu-toggle__icon--visibleX");
            bars.classList.add("menu-toggle__icon--hiddenB");
        } else {
            aside.classList.remove("layout__aside--visible");
            boton.classList.remove("layout__menu-toggle--izq");
            xmark.classList.remove("menu-toggle__icon--visibleX");
            bars.classList.remove("menu-toggle__icon--hiddenB");
        }
    })

    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);

        if (size <= 1160) {
            aside.classList.remove("layout__aside--visible");
            boton.classList.remove("layout__menu-toggle--izq");
            xmark.classList.remove("menu-toggle__icon--visibleX");
            bars.classList.remove("menu-toggle__icon--hiddenB");
        }

    })
});

