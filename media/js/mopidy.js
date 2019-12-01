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

function select(el) {
  const range = document.createRange();
  range.selectNodeContents(el);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function setupCopy(el) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("copy-container");

  const button = document.createElement("button");
  button.textContent = "Copy";
  button.addEventListener("click", event => {
    event.preventDefault();
    button.classList.add("is-loading");
    setTimeout(_ => button.classList.remove("is-loading"), 200);
    select(el);
    document.execCommand("copy");
  });

  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
  wrapper.appendChild(button);
}

function setupSelect(el) {
  el.addEventListener('dblclick', _ => select(el));
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar-burger").forEach(setupNavbarBurger);
  document.querySelectorAll(".tabs").forEach(setupTabs);
  document.querySelectorAll(".copy").forEach(setupCopy);
  document.querySelectorAll(".select").forEach(setupSelect);
});
