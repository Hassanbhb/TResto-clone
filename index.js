const tag_body = document.querySelector("body");

const headerCloseBtn = document.querySelector(".header_close_btn");
headerCloseBtn.addEventListener('click', () => {
  const topHeader = document.querySelector(".top-header");
  topHeader.classList.add("hidden")
})

// resumé de la commande button mobile
// open
const mobile_resume_btn = document.querySelector(".resume-btn");
mobile_resume_btn.addEventListener('click', () => {
  const side_menu = document.querySelector(".side-menu");
  side_menu.classList.remove("hidden")
  tag_body.classList.add('overflow-hidden');
})
// close
const sideMenuCloseBtn = document.getElementById("close_menu");
sideMenuCloseBtn.addEventListener('click', () => {
  const side_menu = document.querySelector(".side-menu");
  side_menu.classList.add("hidden")
  tag_body.classList.remove('overflow-hidden');
})

// open banner de les horaires 
const hours_header = document.querySelector(".hours_header");
hours_header.addEventListener('click', () => {
  const hours_modal = document.querySelector(".mobile_hours_modal");
  hours_modal.classList.remove('hidden')
  tag_body.classList.add('overflow-hidden');
})

// close banner de les horaires
const hours_modal_btn = document.querySelector('.hours_modal_close');
hours_modal_btn.addEventListener('click', () => {
  const mobile_hours_modal = document.querySelector(".mobile_hours_modal");
  mobile_hours_modal.classList.add('hidden')
  tag_body.classList.remove('overflow-hidden');
})

// opan cart
const item_cards = document.querySelectorAll('.card_item')
item_cards.forEach((card) => {
  card.addEventListener('click', () => {
    // const el_name = card.childNodes[1].firstChild.nextSibling.innerText.slice(3)
    // const el_desc = card.childNodes[1].children[1].innerText
    // console.log(card.childNodes[1].children[2].innerText)

    const cart_modal = document.querySelector(".cart_modal");
    cart_modal.classList.remove('hidden')
    tag_body.classList.add('overflow-hidden');
  })
})
// close cart
const cart_modal_close_btn = document.querySelector('.cart_modal_close');
cart_modal_close_btn.addEventListener('click', () => {
  const cart_modal = document.querySelector(".cart_modal");
  cart_modal.classList.add('hidden')
  tag_body.classList.remove('overflow-hidden');
})