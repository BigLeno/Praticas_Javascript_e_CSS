const menu = document.querySelector(".menu-icon")
const lines = document.querySelectorAll(".line")

menu.addEventListener("click", () => {
  lines.forEach((line) => {
    line.classList.remove("no-animation")
  })
  menu.classList.toggle("menu-active")
})