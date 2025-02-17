var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var aProjets = document.querySelector(".a-projets");
var aAbout = document.querySelector("a-about");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

// function agrandirImage() {
//   const image = document.getElementById("img1");
//   image.classList.toggle("agrandie"); // Ajoute ou retire la classe 'agrandie'
// }

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuButton = document.querySelector(".header-hidden");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    console.log(currentScrollTop); // Check if scroll position is detected

    if (currentScrollTop > lastScrollTop) {
      burgerMenuButton.classList.add("hidden-scroll");
    } else {
      burgerMenuButton.classList.remove("hidden-scroll");
    }

    lastScrollTop = currentScrollTop;
  });
});
