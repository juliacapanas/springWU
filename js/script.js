document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".dropdown-menu");
  const icon = document.querySelector(".hamburger-trigger");

  if (!menu || !icon) return;

  icon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});