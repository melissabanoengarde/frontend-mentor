const menu = document.querySelector('.navbar__hamburger');
const menuIcon = document.querySelector('.navbar__menu-icon');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('.navbar__nav');

menuIcon.addEventListener('click', () => {
  nav.classList.add('show');
})

closeIcon.addEventListener('click', () => {
  nav.classList.remove('show');
})
