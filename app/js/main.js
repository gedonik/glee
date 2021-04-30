$(function () {
  $(".popular__btn").on("click", function (event) {
    event.preventDefault();
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false
  });

  var mixer = mixitup('.popular__content');

});