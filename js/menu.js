document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".nav__link");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Остановим действие ссылки

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                // Прокручиваем страницу до элемента с плавной анимацией
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});