window.addEventListener('load', function() {
    const currentHash = sessionStorage.getItem('targetId');
    const targetElement = document.getElementById(currentHash);
    scrollToElement(targetElement);
});

document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a');
    const currentURL = window.location.href;
    const startPage = 'index.html';

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            e.preventDefault();

            if (!currentURL.includes(startPage)) {
                
                sessionStorage.setItem('targetId', extractAfterHash(targetId));
                window.location.href = startPage;
            }

            if (!targetId.includes(startPage)) {
                window.location.href = targetId;
            }

            const result = extractAfterHash(targetId);
            const targetElement = document.getElementById(result);
            scrollToElement(targetElement);
        });
    });
});

function extractAfterHash(inputString) {
    const indexOfHash = inputString.indexOf('#');
    if (indexOfHash !== -1) {
        return inputString.substring(indexOfHash + 1);
    } else {
        return null;
    }
}

function scrollToElement(element) {
    if (element) {
        const fixedHeaderHeight = 90;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - fixedHeaderHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
            });
        }
}

