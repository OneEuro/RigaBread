document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы DOM
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    var menuContacts = document.querySelector('.top-bar-menu-contacts');
    var menuBtn = document.getElementById('menuBtn');
    var body = document.body;

    // Добавляем обработчик события для клика по элементу .menu-toggle
    menuToggle.addEventListener('click', function () {
        // Переключаем класс active
        menu.classList.toggle('active');
        menuContacts.classList.toggle('active');
        body.classList.toggle('menu-open');
        toggleMenuImage();
    });
});

function toggleMenuImage() {
        // Проверяем текущий исходный путь изображения
        if (menuBtn.src.includes('/img/menuBtn.svg')) {
            // Если текущий путь - изображение menuBtn.svg, меняем его на другой путь
            menuBtn.src = '/img/closeBtn.svg'; // Замените путь на ваш путь к другому изображению
        } else {
            // Иначе, если текущий путь - не menuBtn.svg, возвращаем его обратно
            menuBtn.src = '/img/menuBtn.svg'; // Замените путь на ваш путь к изображению menuBtn.svg
        }
    }