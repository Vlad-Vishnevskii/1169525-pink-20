ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [59.939, 30.323],
    zoom: 16,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  var placemark = new ymaps.Placemark([59.93878518, 30.32314304], {
    hintContent: 'ул. Большая Конюшенная, 19/8',
    balloonContent: 'ул. Большая Конюшенная, 19/8'
  },
  {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_marker.png',
    iconImageSize: [36, 36]
  });

  map.geoObjects.add(placemark);
}
