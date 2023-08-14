document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.awards__slider', {
        slidesPerView: 3, // Отображаем 3 слайда одновременно
        spaceBetween: 10, // Отступ между слайдами
        loop: true, // Зацикливаем карусель
        loopedSlides: 8, // Количество дополнительных слайдов, чтобы карусель начинала заново
        autoplay: {
            delay: 10000, // Прокручивать каждые 10 секунд
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});