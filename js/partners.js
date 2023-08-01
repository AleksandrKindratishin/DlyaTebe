$(document).ready(function(){
    $('.carousel-slide').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
      infinite: true
    });
  });
  