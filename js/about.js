document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll(".about__block");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Отключаем наблюдение для элемента, чтобы анимация произошла только один раз
            }
        });
    }, { threshold: 0.5 }); // Порог видимости 50%

    blocks.forEach(block => {
        observer.observe(block);
    });
});