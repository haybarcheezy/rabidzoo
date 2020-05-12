let navBar = document.querySelector("nav");
let scrollPosition = window.scrollY
let navBarHeight = navBar.offsetHeight

let addShadow = () => {
    navBar.classList.add("shadow-md")
}
let removeShadow = () => {
    navBar.classList.remove("shadow-md")
}

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > navBarHeight) {
        addShadow();
    }
    else {removeShadow();}
})

console.log(scrollPosition)