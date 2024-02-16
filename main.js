import "./style.css";

const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

let navBarIsOpen = false;

function toggleNav() {
  if (!navBarIsOpen) {
    menu.classList.toggle("translate-x-[100%]");
  }

  navBarIsOpen = false;
}

openBtn.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", toggleNav);
