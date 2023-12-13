//slick slider
document.addEventListener('DOMContentLoaded', function() {
    $('.production-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow:' <button class="arrow prev"></button>',
        nextArrow:' <button class="arrow next"></button>'
        });
    $('.novelty-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
            });      
        });

    //header-slider
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const slideWidth = slides[0].clientWidth;

    let currentSlide = 0;

    // функция для переключения на следующий слайд
    function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlider();
    }

    // функция для переключения на предыдущий слайд
    function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlider();
    }

    // функция для обновления слайдера
    function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
        dot.classList.add("active");
        } else {
        dot.classList.remove("active");
        }
    });
    }

    // обработчик событий для точек
    dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
    });

    dot.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
    });

    dot.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, intervalTime);
    });

    });

    // обработчик событий для листания свайпом
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].clientX;
    });


    const intervalTime = 2000; // время между переключениями (в миллисекундах)
    let slideInterval;

    const nextSlideAuto = () => {
    const currentSlide = slider.querySelector('.active');
    currentSlide.classList.remove('active');

    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = slides[0];
    }

    nextSlide.classList.add('active');
    };

    slideInterval = setInterval(nextSlideAuto, intervalTime);

    slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, intervalTime);
    });