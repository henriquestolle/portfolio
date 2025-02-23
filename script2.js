const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

function toggleMenu() {
  menu.classList.toggle("hidden");
}

menuBtn.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

function toggleText(id, button) {
  const paragraph = document.getElementById(id);
  const isClamped = paragraph.classList.contains("line-clamp-3");
  paragraph.classList.toggle("line-clamp-3");
  paragraph.classList.toggle("overflow-hidden");
  button.textContent = isClamped ? "Ver menos" : "Ver mais";
}
