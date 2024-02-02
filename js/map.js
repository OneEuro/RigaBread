const filePath = 'data/geoObjects.gpx';

fetch(filePath)
    .then(response => {
        if (!response.ok) {
        throw new Error('Ошибка при загрузке файла GPX');
        }
        return response.text(); // Use text() instead of json() for GPX files
    })
    .then(gpxData => {
        // Parse GPX data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(gpxData, 'text/xml');
        
        const placemarks = Array.from(xmlDoc.querySelectorAll('wpt')).map(point => {
        const lat = parseFloat(point.getAttribute('lat'));
        const lon = parseFloat(point.getAttribute('lon'));
        const name = point.querySelector('name')?.textContent || 'No Name';
        const address = point.querySelector('desc')?.textContent || 'No Address';

        
        return {
            coordinates: [lat, lon],
            properties: {
            hintContent: name,
            balloonContent: address,
            },
        };
        });

        ymaps.ready(() => init(placemarks));
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

function init(placemarks) {
    const map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 9
    });
    map.behaviors.disable("scrollZoom");
    const shops = [];
    var offices = [
        new ymaps.Placemark([55.604163, 37.503361], { 
            hintContent: 'Офис', 
            balloonContent: 'Офис' 
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
        newPlacemark.options.set('visible', false);
        shops.push(newPlacemark);
    });

    document.getElementById('toggle-offices').addEventListener('click', function() {
        toggleVisionFor(offices);
        document.getElementById('toggle-offices').classList.toggle("map-button-clicked"); 
        if (document.getElementById('toggle-shops').classList.contains('map-button-clicked')) {
            document.getElementById('toggle-shops').classList.toggle("map-button-clicked");  
            toggleVisionFor(shops);
        }
    });

    document.getElementById('toggle-shops').addEventListener('click', function() {
        toggleVisionFor(shops);
        document.getElementById('toggle-shops').classList.toggle("map-button-clicked");  
        if (document.getElementById('toggle-offices').classList.contains('map-button-clicked')) {
            document.getElementById('toggle-offices').classList.toggle("map-button-clicked"); 
            toggleVisionFor(offices);
        }
    });
}

// Function to toggle visibility for placemarks
function toggleVisionFor(placemarks) {
    placemarks.forEach(element => {
        element.options.set('visible', !element.options.get('visible'));
    });
}
