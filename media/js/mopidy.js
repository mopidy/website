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

function setupTabs(tabContainer) {
  const tabs = tabContainer.querySelectorAll("li");
  const contents = [];

  forEach(tabs, function(tab) {
    const link = tab.querySelector("a");
    const content = document.querySelector(link.getAttribute("href"));
    contents.push(content);

    link.addEventListener("click", function(event) {
      event.preventDefault();

      forEach(tabs, e => e.classList.remove("is-active"));
      tab.classList.add("is-active");

      forEach(contents, e => e.classList.add("is-hidden"));
      content.classList.remove("is-hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  forEach(document.querySelectorAll(".navbar-burger"), setupNavbarBurger);
  forEach(document.querySelectorAll(".tabs"), setupTabs);
});
