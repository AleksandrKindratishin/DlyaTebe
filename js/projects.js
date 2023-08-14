document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination', // Элемент для точек слайдера
            clickable: true, // Делаем точки кликабельными
        },
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
    });
});