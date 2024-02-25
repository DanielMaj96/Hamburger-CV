const layers = Array.from(document.querySelectorAll('.hamburger div'));

layers.forEach((layer, index) => {
  const element = layer;
  element.style.top = `${180 - index * 30}px`;
});

const unWrap = (e) => {
  const pickedLayer = e.target.parentNode;
  const pickedLayerIndex = layers.indexOf(pickedLayer);
  const activeArray = layers.filter((layer) => layer.classList.contains('active'));
  let higherArray = layers.filter((layer) => layer.classList.contains('higher'));
  higherArray.forEach((layer) => {
    const highLayer = layer;
    const highLayerPosition = parseInt(highLayer.style.top, 10);
    highLayer.style.top = `${highLayerPosition + 150}px`;
  });
  const positionUpdate = () => {
    higherArray = layers.filter((layer) => layer.classList.contains('higher'));
    higherArray.forEach((layer) => {
      const highLayer = layer;
      const highLayerPosition = parseInt(highLayer.style.top, 10);
      highLayer.style.top = `${highLayerPosition - 150}px`;
    });
  };

  const toggleActive = () => {
    pickedLayer.classList.toggle('active');
    layers.forEach((layer) => {
      const currentLayer = layer;
      if (layers.indexOf(layer) < pickedLayerIndex + 1) {
        currentLayer.classList.toggle('higher');
      }
    });
    positionUpdate();
  };

  const replaceActive = () => {
    layers.forEach((layer) => layer.classList.remove('active', 'higher'));
    toggleActive();
  };

  if (activeArray.length === 0 || (activeArray.length === 1 && pickedLayer.classList.contains('active'))) {
    toggleActive();
  } else {
    replaceActive();
  }
};

layers.forEach((layer) => layer.addEventListener('click', unWrap));
