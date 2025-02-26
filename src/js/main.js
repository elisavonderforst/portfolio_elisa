document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".menu");
  const aMenu = document.querySelectorAll(".menu-ancre-border a");

  var toggleMenu = function toggleMenu() {
    menu.classList.toggle("is-active");

    if (menu.classList.contains("is-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  burger.addEventListener("click", toggleMenu);

  aMenu.forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });
});
