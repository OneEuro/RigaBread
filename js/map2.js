const filePath = 'data/Riga_Bread_map.geojson';

fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при загрузке файла GeoJSON');
    }
    return response.json();
  })
  .then(geojsonData => {
    const placemarks = geojsonData.features.map(feature => {
      const coordinates = feature.geometry.coordinates;
      const properties = feature.properties;

      return {
        coordinates: coordinates,
        properties: properties,
      };
    });

    // console.log('Массив меток:', placemarks);

    ymaps.ready(() => init(placemarks));
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

function init(placemarks) {
    const map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    });
    const markers = [];
    var offices = [
        new ymaps.Placemark([55.76, 37.64], { 
            hintContent: 'Москва', 
            balloonContent: 'Столица России' 
            })
    ];
    offices.forEach(office => {
        map.geoObjects.add(office);
        office.options.set('visible',true);
    });

    placemarks.forEach(placemark => {
        const { coordinates, properties } = placemark;

        const newPlacemark = new ymaps.Placemark(coordinates, properties);

        map.geoObjects.add(newPlacemark);

        markers.push(newPlacemark);
    });

  markers.forEach(marker => {
    marker.options.set('visible', false);
  });
}

//  Функция, которая скрывает или отображает метку
function toggleVisionFor(placemarks) {
    placemarks.forEach(element => {
        if (element.options.get('visible')) {
            element.options.set('visible', false);
        } else {
        element.options.set('visible', true);
        }
        }); 
    }