function forEach(arg, fn) {
  Array.prototype.forEach.call(arg, fn);
}

function setupNavbarBurger(navbarBurger) {
  navbarBurger.addEventListener("click", () => {
    const target = document.getElementById(navbarBurger.dataset.target);
    navbarBurger.classList.toggle("is-active");
    target.classList.toggle("is-active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  forEach(document.querySelectorAll(".navbar-burger"), setupNavbarBurger);
});
