//slick slider
document.addEventListener('DOMContentLoaded', function() {
    $('.gallery').slick({
        infinite: true,
        arrows: true,
        // centerMode: true,
        slidesToShow: 5,
        touchMove: false,
        slidesToScroll: 1,
        prevArrow:' <button class="arrow prev"></button>',
        nextArrow:' <button class="arrow next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    // transform: false,
                    // variableWidth: true,
                    lazyLoad: 'progressive',
                    // slide: '',
                    // rows: 2,
                    // prevArrow: '',
                    // nextArrow: '' 
                }
            }
        ],
        });
    $('.novelty-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
            });   
        });     