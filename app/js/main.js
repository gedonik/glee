$(function () {
  $(".popular__btn").on("click", function (event) {
    event.preventDefault();
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // ломает стили
  // $('.partners').slick({
  //   dots: false,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });

});

var mixer = mixitup('.mix-nav__content');
var mixer = mixitup('.mix-nav__content--new');