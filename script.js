const burgerBtn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navWrap = () => {
  nav.classList.toggle('open');
  burgerBtn.classList.toggle('open');
};

burgerBtn.addEventListener('click', navWrap);
