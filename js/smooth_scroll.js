window.addEventListener('load', function() {
    const currentHash = sessionStorage.getItem('targetId');
    const targetElement = document.getElementById(currentHash);
    scrollToElement(targetElement);
});

// document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('div.top-bar a, div.site-map-grid a');

    const currentURL = window.location.href;
    const startPage = 'http://sonicx.vdsman.ru';

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            e.preventDefault();

            // if (!currentURL.includes(startPage)) {
                
            //     sessionStorage.setItem('targetId', extractAfterHash(targetId));
            //     window.location.href = startPage;
            // }

            // if (!targetId.includes(startPage)) {
            //     window.location.href = targetId;
            // }

            if (targetId.includes("page_id") && currentURL != startPage) {
                window.location.href = targetId;
            }
            if (currentURL.includes("page_id") && !targetId.includes("page_id")) {
                sessionStorage.setItem('targetId', extractAfterHash(targetId));
                window.location.href = startPage;
            }
            if (targetId == startPage) {
                sessionStorage.removeItem('targetId');
                window.location.href = startPage;
            }

            const result = extractAfterHash(targetId);
            const targetElement = document.getElementById(result);
            scrollToElement(targetElement);
        });
    });
// });

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

