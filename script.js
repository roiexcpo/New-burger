const header = document.querySelector (".header");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function() {
    const isOpen = header.classList.toggle("header--open");
});