document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1, // Отображаем один слайд за раз
      spaceBetween: 20, // Отступ между слайдами
      loop: true, // Бесконечная прокрутка
    });
  });