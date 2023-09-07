document.addEventListener("DOMContentLoaded", function () {
    const awardsSlider = document.querySelector('.awards__slides');
    const slideWidth = awardsSlider.firstElementChild.clientWidth;
    const totalSlides = awardsSlider.children.length;

    awardsSlider.style.width = `${slideWidth * totalSlides}px`; // Устанавливаем общую ширину слайдера

    function slide() {
        awardsSlider.style.transition = 'transform 0.5s ease-in-out';
        awardsSlider.style.transform = `translateX(-${slideWidth}px)`; // Смещаем слайды на ширину одного слайда
    }

    function resetSlide() {
        awardsSlider.style.transition = 'none';
        awardsSlider.style.transform = 'translateX(0)'; // Возвращаем слайдер в начальное положение
        setTimeout(slide, 10); // Смещаем слайдер после сброса анимации
    }

    slide(); // Запускаем первую прокрутку

    setInterval(resetSlide, 30000); // Сбрасываем слайдер каждые 30 секунд
});

