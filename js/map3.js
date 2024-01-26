ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10,
            controls: ['zoomControl']
        });
        const officeBtn = document.getElementById('toggle-offices');
        const shopBtn = document.getElementById('toggle-shops');
        // gpxButton = $('.load-gpx'),
        // kmlButton = $('.load-kml'),
        // kmlFlightsButton = $('.load-kml-flights');

    // Отключение кеширования атрибута disabled в Firefox.
    // gpxButton.get(0).disabled = false;
    // kmlButton.get(0).disabled = false;
    // kmlFlightsButton.get(0).disabled = false;

    // При нажатии на кнопку загружаем соответствующий XML-файл
    // и отображаем его данные на карте.
  

    officeBtn.addEventListener("click", () => {
        ymaps.geoXml.load('http://sonicx.vdsman.ru/map.gpx')
            .then(function (res) {
                map.geoObjects.add(res.geoObjects);
                var shops = [];
                shops.push(res);

                // Вызывается после успешной загрузки и добавления в shops
                handleShops(shops);
            });
            // .catch(function (error) {
            //     // Обработка ошибок загрузки
            //     console.error('Ошибка при загрузке:', error);
            // });
    });

    function handleShops(shops) {
        // Делайте что-то с массивом shops здесь
        console.log(shops);
    }
    shopBtn.addEventListener("click", () => {
        ymaps.geoXml.load('http://sonicx.vdsman.ru/map.gpx')
            .then(onGeoXmlLoad);
        // e.target.disabled = true;
    });


    // kmlFlightsButton.click(function (e) {
    //     ymaps.geoXml.load('http://openflights.org/demo/openflights-sample.kml')
    //         .then(function (res) {
    //             res.geoObjects.each(function (obj) {
    //                 obj.options.set({preset: 'islands#blackCircleIcon'});
    //                 if (!obj.geometry) {
    //                     obj.each(function (obj) {
    //                         obj.options.set({strokeColor: "9090e8"});
    //                     });
    //                 }
    //             });
    //             onGeoXmlLoad(res);
    //         });
    //     e.target.disabled = true;
    // });

    // Обработчик загрузки XML-файлов.
    function onGeoXmlLoad(res) {
        myMap.geoObjects.add(res.geoObjects);
        if (res.mapState) {
            res.mapState.applyToMap(myMap);
        }
        else {
            myMap.setBounds(res.geoObjects.getBounds());
        }
    }
}