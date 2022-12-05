const menu = document.querySelector('.navbar__hamburger');
const menuIcon = document.querySelector('.navbar__menu-icon');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('.navbar__nav');
const backdrop = document.querySelector('.navbar__backdrop');

menuIcon.addEventListener('click', () => {
  nav.classList.add('navbar-show');
  // backdrop.classList.add('backdrop-show');
  backdrop.style.animationName = "fadeIn";
  backdrop.style.animationDuration = "0.5s";
  backdrop.style.display = "block";
})

closeIcon.addEventListener('click', () => {
  nav.classList.remove('navbar-show');
  backdrop.classList.remove('backdrop-show');
  backdrop.style.display = "none";
})
