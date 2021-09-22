// JavaScript


function openMenu() {
  var element = document.getElementById("Menu");
  element.classList.add("is-opened");
  var element2 = document.getElementById("Overlay");
  element2.classList.add("is-active");
  var body = document.body;
  body.classList.add("is-not-scrollable");
}

function closeMenu() {
  var element = document.getElementById("Menu");
  element.classList.remove("is-opened");
  var element2 = document.getElementById("Overlay");
  element2.classList.remove("is-active");
  var body = document.body;
  body.classList.remove("is-not-scrollable");
}
