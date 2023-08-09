const awardsSlider = document.querySelector(".awards__slides");
const slideWidth = awardsSlider.offsetWidth;
let currentSlide = 0;
const numSlides = awardsSlider.children.length;

function moveToSlide(slideIndex) {
    if (slideIndex < 0 || slideIndex >= numSlides) {
        return;
    }
    currentSlide = slideIndex;
    awardsSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(() => {
    moveToSlide((currentSlide + 1) % numSlides);
}, 10000);