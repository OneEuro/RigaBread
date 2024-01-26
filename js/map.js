//map settings
// ymaps.ready(function() {
//     var myMap = new ymaps.Map('map', {
//         center: [55.76, 37.64],
//         zoom: 10
//     });
//     // Отключаем зумирование
//     myMap.behaviors.disable("scrollZoom");

//     // const city = "Москва";
//     // var shops = [];
//     // ymaps.geocode(city + ", Перекресток").then(function (res) {
//     //     // Обходим объекты и добавляем маркеры на карту и в массив
//     //     res.geoObjects.each(function (geoObject) {
//     //       var coord = geoObject.geometry.getCoordinates();
//     //       var shopPlacemark = new ymaps.Placemark(coord, { content: 'Перекресток' });
//     //     //   myMap.geoObjects.add(shopPlacemark); // Добавляем метку на карту
//     //       shops.push(shopPlacemark);
//     //     });
//     //   }).catch(function (error) {
//     //     console.error("Ошибка при выполнении запроса:", error);
//     //   });


// var offices = [
//     new ymaps.Placemark([55.76, 37.64], { 
//         hintContent: 'Москва', 
//         balloonContent: 'Столица России' 
//         }),
//     new ymaps.Placemark([59.93, 30.31], { 
//         hintContent: 'Санкт-Петербург', 
//         balloonContent: 'Культурная столица России' 
//         })
// ];
// // var shops = [
// // new ymaps.Placemark([55.76, 37.65], { 
// //     hintContent: 'На Лубянке', 
// //     balloonContent: 'ТЦ' 
// //     }),
// // new ymaps.Placemark([59.83, 30.31], { 
// //     hintContent: 'Трубная', 
// //     balloonContent: 'Филиал' 
// //     })
// // ];

// for (var i = 0; i < offices.length; i++) {
//     myMap.geoObjects.add(offices[i]);
//     offices[i].options.set('visible',true);

// }
// for (var i = 0; i < shops.length; i++) {
//     myMap.geoObjects.add(shops[i]);
//     // shops[i].options.set('visible',false);
// }

// // Функция, которая скрывает или отображает метку
// // function togglePlacemark(placemark) {
// //     placemark.forEach(element => {
// //         if (element.options.get('visible')) {
// //             element.options.set('visible', false);
// //         } else {
// //         element.options.set('visible', true);
// //         }
// //         }); 
// //     }


// // // Назначаем обработчик события на кнопку
// // document.getElementById('toggle-offices').addEventListener('click', function() {
// //     togglePlacemark(offices);
// //     document.getElementById('toggle-offices').classList.toggle("map-button-clicked"); 
// //     if (document.getElementById('toggle-shops').classList.contains('map-button-clicked')) {
// //         document.getElementById('toggle-shops').classList.toggle("map-button-clicked");  
// //         togglePlacemark(shops);
// //     }
// // });

// // document.getElementById('toggle-shops').addEventListener('click', function() {
// //     togglePlacemark(shops);
// //     document.getElementById('toggle-shops').classList.toggle("map-button-clicked");  
// //     if (document.getElementById('toggle-offices').classList.contains('map-button-clicked')) {
// //         document.getElementById('toggle-offices').classList.toggle("map-button-clicked"); 
// //         togglePlacemark(offices);
// //     }
// //     });
// });

// Введите название города (например, "Москва")
const city = "Москва";

// Массив для хранения объектов Placemark
var shops = [];
var offices = [];

function getCoordinatesAndDisplayMap(callback) {
    ymaps.ready(init);
  
    function init() {
      // Создаем карту с центром в указанном городе
      const myMap = new ymaps.Map('map', {
        center: [55.7558, 37.6176], // Координаты Москвы (можно подставить другие)
        zoom: 12
      });
      myMap.behaviors.disable("scrollZoom");
  
      // Массив для хранения объектов Placemark
    //   var shops = [];
      offices.push(new ymaps.Placemark([55.76, 37.64], { 
        hintContent: 'Москва', 
        balloonContent: 'Столица России' 
        }));
        myMap.geoObjects.add(offices[0]);
      // Выполняем запрос к Yandex Geocoding API
      ymaps.geocode(city + ", Супермаркет Перекрёсток", {kind: 'house', results: 20 }).then(function (res) {
        // Обходим объекты и добавляем маркеры на карту и в массив
        res.geoObjects.each(function (geoObject) {
          var coord = geoObject.geometry.getCoordinates();
          var shopPlacemark = new ymaps.Placemark(coord, { hintContent: 'Магазин',balloonContent: 'Перекрёсток'});
          myMap.geoObjects.add(shopPlacemark); // Добавляем метку на карту
          shops.push(shopPlacemark);
        });
  
        // Вызываем колбэк с массивом после завершения запроса и заполнения массива
        callback(shops);
      }).catch(function (error) {
        console.error("Ошибка при выполнении запроса:", error);
      });
    }
  }
  
  // Используем колбэк для обработки массива после завершения запроса
  getCoordinatesAndDisplayMap(function (shops) {
    // shops теперь содержит метки, и вы можете с ними работать
    console.log(shops);
    for (var i = 0; i < shops.length; i++) {
        shops[i].options.set('visible',false);
    }
    for (var i = 0; i < offices.length; i++) {
        
        offices[i].options.set('visible',true);
    }
  });

  function togglePlacemark(placemark) {
    placemark.forEach(element => {
        if (element.options.get('visible')) {
            element.options.set('visible', false);
        } else {
        element.options.set('visible', true);
        }
        }); 
    }

    document.addEventListener("DOMContentLoaded", function() {
// Назначаем обработчик события на кнопку
document.getElementById('toggle-offices').addEventListener('click', function() {
    togglePlacemark(offices);
    document.getElementById('toggle-offices').classList.toggle("map-button-clicked"); 
    if (document.getElementById('toggle-shops').classList.contains('map-button-clicked')) {
        document.getElementById('toggle-shops').classList.toggle("map-button-clicked");  
        togglePlacemark(shops);
    }
});

document.getElementById('toggle-shops').addEventListener('click', function() {
    togglePlacemark(shops);
    document.getElementById('toggle-shops').classList.toggle("map-button-clicked");  
    if (document.getElementById('toggle-offices').classList.contains('map-button-clicked')) {
        document.getElementById('toggle-offices').classList.toggle("map-button-clicked"); 
        togglePlacemark(offices);
    }
    });
});

// Замените 'path/to/your/file.geojson' на путь к вашему файлу GeoJSON
const filePath = 'data/Riga_Bread_map.geojson';

// Используйте fetch для получения данных из файла
fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при загрузке файла GeoJSON');
    }
    return response.json();
  })
  .then(geojsonData => {
    // Вывод данных в консоль
    console.log('Данные из файла GeoJSON:', geojsonData);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

