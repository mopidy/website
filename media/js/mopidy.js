if (window.NodeList && !NodeList.prototype.forEach) {
  // Polyfill NodeList.forEach
  // https://caniuse.com/#feat=mdn-api_nodelist_foreach
  NodeList.prototype.forEach = Array.prototype.forEach;
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

  tabs.forEach(tab => {
    const link = tab.querySelector("a");
    const content = document.querySelector(link.getAttribute("href"));
    contents.push(content);

    link.addEventListener("click", event => {
      event.preventDefault();

      tabs.forEach(el => el.classList.remove("is-active"));
      tab.classList.add("is-active");

      contents.forEach(el => el.classList.add("is-hidden"));
      content.classList.remove("is-hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar-burger").forEach(setupNavbarBurger);
  document.querySelectorAll(".tabs").forEach(setupTabs);
});
