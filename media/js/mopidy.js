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

function openPopup(target, title) {
  return window.open(
    target, title,
    [
      "toolbar=no",
      "location=no",
      "directories=no",
      "status=no",
      "menubar=no",
      "scrollbars=no",
      "resizable=no",
      "copyhistory=no",
      "width=" + 800,
      "height=" + 600,
      "left=" + ((screen.width/2)-(800/2)),
      "top=" + ((screen.height/2)-(600/2))
    ].join(", "));
}

function setupAuth(auth) {
  let checkPopupInterval = null;

  const button = auth.querySelector(".auth-button");
  const error = auth.querySelector(".auth-error");

  const reset = _ => {
    clearInterval(checkPopupInterval);
    error.classList.add("is-hidden");
  }

  window.addEventListener("message", event => {
    if (!event.origin.match(/https:\/\/(auth\.)?mopidy\.com/)) {
      return;
    }

    reset();
    event.source.close()

    if (event.data.error) {
      error.classList.remove("is-hidden");
      error.innerText = "[" + event.data.error + "]";
      if (event.data.error_description) {
        let desc = event.data.error_description;
        desc = desc.replace(/^\w/, c => c.toUpperCase());
        desc = desc.replace(/([.]?$)/, ".");
        error.innerText += " " + desc;
      }
    } else {
      auth.querySelectorAll("[data-name]").forEach(el => {
        el.innerText = event.data[el.dataset.name];
      });
    }
  });

  button.addEventListener("click", event => {
    reset();
    event.preventDefault();

    const popup = openPopup(button.href, "Authenticate Mopidy extension.");
    checkPopupInterval = setInterval(_ => {
      if (popup.closed) {
        reset();
        error.innerText = "Popup closed without completing authentication.";
        error.classList.remove("is-hidden");
      };
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".navbar-burger").forEach(setupNavbarBurger);
  document.querySelectorAll(".tabs").forEach(setupTabs);
  document.querySelectorAll(".copy").forEach(setupCopy);
  document.querySelectorAll(".select").forEach(setupSelect);
  document.querySelectorAll(".auth").forEach(setupAuth);
});
