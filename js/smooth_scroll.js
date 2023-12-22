document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const fixedHeaderHeight = 90;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - fixedHeaderHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        });
    });
});
