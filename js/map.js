//map settings
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    });
    // Отключаем зумирование
    myMap.behaviors.disable("scrollZoom");

var offices = [
    new ymaps.Placemark([55.76, 37.64], { 
        hintContent: 'Москва', 
        balloonContent: 'Столица России' 
        }),
    new ymaps.Placemark([59.93, 30.31], { 
        hintContent: 'Санкт-Петербург', 
        balloonContent: 'Культурная столица России' 
        })
];
var shops = [
new ymaps.Placemark([55.76, 37.65], { 
    hintContent: 'На Лубянке', 
    balloonContent: 'ТЦ' 
    }),
new ymaps.Placemark([59.83, 30.31], { 
    hintContent: 'Трубная', 
    balloonContent: 'Филиал' 
    })
];

for (var i = 0; i < offices.length; i++) {
    myMap.geoObjects.add(offices[i]);
    offices[i].options.set('visible',true);

}
for (var i = 0; i < shops.length; i++) {
    myMap.geoObjects.add(shops[i]);
    shops[i].options.set('visible',false);
}

// Функция, которая скрывает или отображает метку
function togglePlacemark(placemark) {
    placemark.forEach(element => {
        if (element.options.get('visible')) {
            element.options.set('visible', false);
        } else {
        element.options.set('visible', true);
        }
        }); 
    }

// Назначаем обработчик события на кнопку
document.getElementById('toggle-offices').addEventListener('click', function() {
    togglePlacemark(offices);
    document.getElementById('toggle-offices').classList.toggle("map-button-clicked"); 
});

document.getElementById('toggle-shops').addEventListener('click', function() {
    togglePlacemark(shops);
    document.getElementById('toggle-shops').classList.toggle("map-button-clicked");  
    });
});