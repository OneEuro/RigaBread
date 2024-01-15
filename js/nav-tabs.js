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
        tab.addEventListener('click', function(event) {
        // Восстановление исходного содержимого первой вкладки при смене вкладки
        document.querySelector('.tab-content #news').innerHTML = initialContent;
        });
    });
});