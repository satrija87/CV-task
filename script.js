let burgerButton = document.querySelector(".menu-button");
let menu = document.querySelector(".burger-menu");
let crossButton = document.querySelector(".burger-cross");
let overlay = document.querySelector(".overlay");
let link = document.querySelectorAll(".nav__link");

function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
}

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

burgerButton.addEventListener("click", openMenu);
crossButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
link.forEach((link) => link.addEventListener("click", closeMenu));

const prev = document.querySelector(".arrow-left");
const next = document.querySelector(".arrow-right");
let slider = document.querySelector(".hobbies__slider");
const slides = document.querySelectorAll(".hobbies__item");
let step = slides[0].clientWidth;
let index = 0;

let activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

let nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
};

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
