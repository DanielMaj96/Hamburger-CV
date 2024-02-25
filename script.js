const layers = Array.from(document.querySelectorAll('.hamburger div'));

layers.forEach((layer, index) => layer.style.top = `${180 - index * 30}px`);

const unWrap = (el) => {
  const div = el.target.parentNode;
  const divIndex = layers.indexOf(div);
  const onlyOneOpenClass = layers.filter((layer) => layer.classList.contains('open'));
  if (onlyOneOpenClass.length > 0 && div.classList.contains('open') === false) {
    return;
  }
  div.classList.toggle('open');
  if (div.classList.contains('open')) {
    layers.forEach((layer) => {
      const curPosition = parseInt(layer.style.top, 10);
      const cur = layer;
      if (layers.indexOf(layer) < divIndex + 1) {
        cur.style.top = `${curPosition - 150}px`;
      }
    });
  } else {
    layers.forEach((layer) => {
      const curPosition = parseInt(layer.style.top, 10);
      const cur = layer;
      if (layers.indexOf(layer) < divIndex + 1) {
        cur.style.top = `${curPosition + 150}px`;
      }
    });
  }
};
layers.forEach((layer) => layer.addEventListener('click', unWrap));
