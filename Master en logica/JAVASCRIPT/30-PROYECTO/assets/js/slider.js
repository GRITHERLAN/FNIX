let btnprev = document.querySelector(".slider__btn-prev");

let btnnext = document.querySelector(".slider__btn-next");

let slides = document.querySelectorAll(".slides__item");

let counter = 0;
let allSlides = slides.length;
/* Boton siguiente */
btnnext.addEventListener("click", () => {
  counter++;

  if (counter >= allSlides) {
    counter = 0;
  }

  activeSlide(counter);
});

/* Boton anterior */

btnprev.addEventListener("click", () => {
  counter--;

  if (counter < 0) {
    counter = allSlides - 1;
  }

  activeSlide(counter);
});

let clearActives = () => {
  slides.forEach((slide) => {
    slide.classList.remove("slides__item--active");
  });
};

let activeSlide = (i) => {
  clearActives();

  slides[i].classList.add("slides__item--active");
};
