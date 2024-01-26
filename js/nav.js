document.addEventListener("DOMContentLoaded", function() {
    var initialContent = document.querySelector('.tab-content #news').innerHTML;
    var allTabPanels = document.querySelectorAll('.tab-content .tab-pane .scroll-container .scroll-content');
    var tab1 = document.getElementById('news');
    var combinedContent = '';
    allTabPanels.forEach(function(panel) {
        combinedContent += panel.innerHTML;
    });
    document.querySelector('.tab-content #news .scroll-container .scroll-content').innerHTML = combinedContent;

document.querySelectorAll('[data-toggle=tab]').forEach(function(element) {
    element.addEventListener('click', function(e) {
        if (this.parentElement.classList.contains('active')) {
            document.querySelector('.tab-content #news .scroll-container .scroll-content').innerHTML = combinedContent;

            this.parentElement.classList.remove('active');
            document.querySelector(this.getAttribute('href')).classList.remove( 'active');
            tab1.classList.add('active');
        } else {
            tab1.innerHTML = initialContent;
            document.querySelectorAll('[data-toggle=tab]').forEach(function(el) {
                el.parentElement.classList.remove('active');
            });
            document.querySelectorAll('.tab-content .tab-pane').forEach(function(el) {
                el.classList.remove( 'active');
            });
    
            this.parentElement.classList.add('active');
            document.querySelector(this.getAttribute('href')).classList.add( 'active');
        }
    
        e.stopPropagation();
        e.preventDefault();
        });
    });
});