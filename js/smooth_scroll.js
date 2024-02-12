window.addEventListener('load', function() {
    const currentHash = sessionStorage.getItem('targetId');
    findAnchorAndScrollTo(currentHash);
});

document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('div.top-bar a, div.site-map-grid a');
    const currentURL = window.location.pathname;
 
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            e.preventDefault();
            if (window.innerWidth <= 480 && anchor.id === 'productionLink') { // отключаем для моб версии переход по ссылке, что бы отработал ховер
                return;
            }
            var hashPosition = targetId.indexOf('#');
            switch(hashPosition) {
                case -1:
                    sessionStorage.removeItem('targetId');
                    // console.log("targetId",targetId);
                    window.location.href = targetId;
                    return;
                default:
                    var pathBeforeHash = targetId.substring(0, hashPosition);
                    var hashFragment = targetId.substring(hashPosition + 1);
                    // console.log("pathBeforeHash",pathBeforeHash);
                    // console.log("hashFragment",hashFragment);
                    // console.log("currentURL",currentURL);
                    if(pathBeforeHash != currentURL) {
                        sessionStorage.setItem('targetId', hashFragment);
                        window.location.href = pathBeforeHash;
                    } else {
                        findAnchorAndScrollTo(hashFragment);
                    }
            }
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

function findAnchorAndScrollTo(anchor) {
    if (anchor) {
        const targetElement = document.getElementById(anchor);
        scrollToElement(targetElement);
    } else {
        // console.log("anchro is ",anchor);
    }
}
