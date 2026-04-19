document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".dropdown-menu");
  const icon = document.querySelector(".menu-icon");
  const overlay = document.querySelector(".fade-layer");

  if (!menu || !icon || !overlay) return;

  icon.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});