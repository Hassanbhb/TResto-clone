const tag_body = document.querySelector("body");
const headerCloseBtn = document.querySelector(".header_close_btn");
const mobile_resume_btn = document.querySelector(".resume-btn");
const sideMenuCloseBtn = document.getElementById("close_menu");
const hours_header = document.querySelector(".hours_header");
const hours_modal_btn = document.querySelector('.hours_modal_close');


headerCloseBtn.addEventListener('click', () => {
  const topHeader = document.querySelector(".top-header");
  topHeader.classList.add("hidden")
})

mobile_resume_btn.addEventListener('click', () => {
  const side_menu = document.querySelector(".side-menu");
  side_menu.classList.remove("hidden")
})

hours_header.addEventListener('click', () => {
  const mobile_hours_modal = document.querySelector(".mobile_hours_modal");
  mobile_hours_modal.classList.remove('hidden')
  tag_body.classList.add('overflow-hidden');
})

hours_modal_btn.addEventListener('click', () => {
  const mobile_hours_modal = document.querySelector(".mobile_hours_modal");
  mobile_hours_modal.classList.add('hidden')
  tag_body.classList.remove('overflow-hidden');
})

sideMenuCloseBtn.addEventListener('click', () => {
  const side_menu = document.querySelector(".side-menu");
  side_menu.classList.add("hidden")
})

