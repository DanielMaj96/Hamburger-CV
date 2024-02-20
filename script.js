const layers = Array.from(document.querySelectorAll('.hamburger div'));

layers.forEach((layer, index) => layer.style.top = `${180 - index * 30}px`);

const unWrap = (el) => {
  const div = el.target.parentNode;
  const divIndex = layers.indexOf(div);
  // const divPosition = parseInt(div.style.top, 10);
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

  // if (div.classList.contains('open')) {
  //   div.style.top = `${divPosition - 150}px`;
  //   layers.forEach((layer) => {
  //     if (layers.indexOf(layer) < divIndex) {
  //       console.log(divPosition, index);
  //       layer.style.top = `${divPosition - 150}px`;
  //       console.log(divPosition, index);
  //     }
  //   });
  // } else {
  //   div.style.top = `${divPosition + 150}px`;
  //   layers.forEach((layer) => {
  //     if (layers.indexOf(layer) < divIndex) {
  //       layer.style.top = `${divPosition + 150}px`;
  //     }
  //   });
  // }
};
layers.forEach((layer) => layer.addEventListener('click', unWrap));
