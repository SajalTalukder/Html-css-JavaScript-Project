const navBurger = document.querySelector(".nav__burger");
const navUl = document.querySelector(".nav__ul");
navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("nav__toggle");
  navUl.classList.toggle("nav__ul__open");
});
