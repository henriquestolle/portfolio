function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");

  menu.classList.toggle("show");
  menuIcon.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});
