// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector("menu-toggle");
//     const navMenu = document.querySelector("navbar-ul");

//     menuToggle.addEventListener("click", function () {
//         navMenu.classList.toggle("active");
//     });
// });

document.getElementsByClassName("menu-toggle")[0].addEventListener("click", () => {
    const navBar = document.querySelector(".navbar-ul");
    navBar.classList.toggle("active");
});