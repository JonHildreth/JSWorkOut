//----HamNav(Start)----//

const hamburger = document.querySelector(".ham");
const rightSide = document.querySelector(".rightSide");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    rightSide.classList.toggle("active");
})

document.querySelectorAll(".headbt").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    rightSide.classList.remove("active");
}))

//----HamNav(End)----//
//----jsStart(Start)----//

const jsStart = document.querySelector(".jsStart");
const jsInfo = document.querySelector(".jsInfo");
const cssInfo = document.querySelector(".cssInfo");
const htmlInfo = document.querySelector(".htmlInfo")


jsStart.addEventListener("click", () => {
    jsStart.classList.toggle("active");
    jsInfo.classList.toggle("active");
    cssInfo.classList.toggle("active");
    htmlInfo.classList.toggle("active");
})

document.querySelectorAll(".headbt").forEach(n => n.addEventListener("click", () => {
    jsStart.classList.remove("active");
    jsInfo.classList.remove("active");
    cssInfo.classList.remove("active");
    htmlInfo.classList.remove("active");

}))


