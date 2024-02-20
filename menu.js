const headerCloseBtn = document.querySelector(".header_close_btn");
const resumebtn = document.querySelector(".resume-btn");
const menuCloseBtn = document.getElementById("close_menu");

headerCloseBtn.addEventListener('click', () => {
  const topHeader = document.querySelector(".top-header");
  console.log(topHeader)
  topHeader.classList.add("hidden")
})

resumebtn.addEventListener('click', () => {
  const side_menu = document.querySelector(".side-menu");
  side_menu.classList.remove("hidden")
})

menuCloseBtn.addEventListener('click', () => {
  const side_menu = document.querySelector(".side-menu");
  side_menu.classList.add("hidden")
})