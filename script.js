const layers = document.querySelectorAll('.hamburger div');

const unWrap = (el) => {
  el.target.parentNode.classList.toggle('open');
  // el.target.parentNode.style.top = `${200}px`;
};

layers.forEach((layer) => layer.addEventListener('click', unWrap));
