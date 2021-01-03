const navBurger = document.querySelector(".nav__burger");
const navUl = document.querySelector(".nav__ul");
navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("nav__toggle");
  navUl.classList.toggle("nav__ul__open");
});

const top_bottom = document.querySelector(".top-bottom");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    top_bottom.classList.add("top-bottom__show");
  } else {
    top_bottom.classList.remove("top-bottom__show");
  }
});
// smoth scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
});

gsap.from(".section-1__box", {
  scrollTrigger: ".section-1__box",
  x: -1000,
  duration: 1,
  stagger: 0.2,
});
gsap.from(".composition__img--1", {
  scrollTrigger: ".composition__img--1",
  y: -100,
  duration: 1,
  opacity: 0,
});
gsap.from(".composition__img--2", {
  scrollTrigger: ".composition__img--2",
  x: 100,
  duration: 1,
  opacity: 0,
});
gsap.from(".composition__img--3", {
  scrollTrigger: ".composition__img--2",
  y: 100,
  duration: 1,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".section-2__text", {
  scrollTrigger: ".section-2__text",
  x: -500,
  duration: 1,
  delay: 0.5,
});

gsap.from(".work-card", {
  scrollTrigger: ".work-card",
  y: 400,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
  delay: 0.4,
});
gsap.from(".card", {
  scrollTrigger: ".card",
  y: 400,
  duration: 0.8,
  stagger: 0.3,
  opacity: 0,
  delay: 0.4,
});
