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

    topBarMargin();
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

function topBarMargin() {
    var myDiv = document.getElementById('top-bar-menu');    
    if (myDiv) {
        var divHeight = myDiv.offsetHeight;
        // Находим родительский элемент
        var parentElement = myDiv.parentElement;
        // Получаем все дочерние элементы родителя
        var childElements = parentElement.children;
        // Ищем индекс элемента с идентификатором 'top-bar-menu' в списке дочерних элементов
        var indexOfMyDiv = Array.prototype.indexOf.call(childElements, myDiv);
        // Получаем следующий элемент
        var nextElement = null;
        for (var i = indexOfMyDiv + 1; i < childElements.length; i++) {
            if (childElements[i].tagName.toLowerCase() === 'section') {
                nextElement = childElements[i];
                break;
            }
        }
        // Если следующий элемент существует, устанавливаем marginTop
        if (nextElement) {
            nextElement.style.marginTop = divHeight + 'px';
            console.log("marginTop следующего элемента установлен:", divHeight, "пикселей");
        } else {
            console.error("Нет следующего элемента");
        }
    } else {
        console.error("Элемент с id 'top-bar-menu' не найден.");
    }
}    