const navBurger = document.querySelector(".nav__burger");
const navUl = document.querySelector(".nav__ul");
navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("nav__toggle");
  navUl.classList.toggle("nav__ul__open");
});

// scroll animation
gsap.registerPlugin(ScrollTrigger);
let t1 = gsap.timeline();
t1.from(".animation__left", {
  x: -300,
  opacity: 0,
  duration: 1.4,
  stagger: 1,
}).from(
  ".animation__down",
  {
    y: 50,
    opacity: 0,
    duration: 1,
  },
  "-=0.8"
);
