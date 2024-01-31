//slick slider
document.addEventListener('DOMContentLoaded', function() {
    $('.gallery').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:' <button class="arrow prev"></button>',
        nextArrow:' <button class="arrow next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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