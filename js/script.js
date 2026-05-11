let hamburger = document.querySelector(".headerHamburger");
let hamMenu = document.querySelector(".hamMenu");
let hamClose = document.querySelector(".hamClose");
hamburger.addEventListener("click", () => {
    hamMenu.classList.toggle("hamMenuTransition");
})

hamClose.addEventListener("click", () => {
    hamMenu.classList.toggle("hamMenuTransition");
})
