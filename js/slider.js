//slick slider
document.addEventListener('DOMContentLoaded', function() {
    $('.gallery').slick({
        infinite: true,
        arrows: true,
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
                    lazyLoad: 'progressive',
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