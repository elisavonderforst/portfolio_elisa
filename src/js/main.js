var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var aProjets = document.querySelector(".a-projets");
var aAbout = document.querySelector("a-about");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

var toggleMenuClose = function toggleMenuClose() {
  toggleMenuClose.classList("is-close");
};

aAbout.addEventListener("click", toggleMenu);

// function agrandirImage() {
//   const image = document.getElementById("img1");
//   image.classList.toggle("agrandie"); // Ajoute ou retire la classe 'agrandie'
// }
