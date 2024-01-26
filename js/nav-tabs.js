document.addEventListener("DOMContentLoaded", function() {

    // Сохранение исходного содержимого первой вкладки
    var initialContent = document.querySelector('.tab-content #news').innerHTML;
    // Проверка, есть ли активные вкладки при загрузке страницы
    var activeTabs = document.querySelectorAll('#myTabs li.nav-item a.active');
    if (activeTabs.length === 0) {
      // Если нет активных вкладок, переместить содержимое всех панелей в одну общую панель
    var allTabPanels = document.querySelectorAll('.tab-content .tab-pane .scroll-container .scroll-content');
    var combinedContent = '';
    allTabPanels.forEach(function(panel) {
        combinedContent += panel.innerHTML;
    });
    document.querySelector('.tab-content #news .scroll-container .scroll-content').innerHTML = combinedContent;
    }

    // Обработчик события при клике на вкладку
    var tabs = document.querySelectorAll('#myTabs li[role="presentation"] a');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
        // Восстановление исходного содержимого первой вкладки при смене вкладки
        document.querySelector('.tab-content #news').innerHTML = initialContent;
        var parentElement = tab.parentNode;

        if (parentElement.classList.contains("active")) {
            console.log("ACTIVE");
            tab.removeAttribute('data-toggle');
        } else {
            tab.setAttribute('data-toggle', 'tab');
        }
            parentElement.classList.toggle('active');
        });
    });
});



// function toggleTab(tabId, contentId) {
//     var tab = document.getElementById(tabId);
//     var content = document.getElementById(contentId);

//     if (!tab.classList.contains('active')) {
//       // Снимаем активное состояние со всех вкладок
//       var tabs = document.querySelectorAll('.nav-link');
//       tabs.forEach(function (tab) {
//         tab.classList.remove('active');
//       });

//       // Снимаем активное состояние со всех контентных блоков
//       var contents = document.querySelectorAll('.tab-pane');
//       contents.forEach(function (content) {
//         content.classList.remove('show', 'active');
//       });

//       // Устанавливаем активное состояние для текущей вкладки
//       tab.classList.add('active');
//       content.classList.add('show', 'active');
//     }
//   }