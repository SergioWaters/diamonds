$(document).ready(function () {
  $('.ui-kit.card_slider').slick({
    dots: true,
    appendDots: $('.ui-kit.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring1.card_slider').slick({
    dots: true,
    appendDots: $('.ring1.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring2.card_slider').slick({
    dots: true,
    appendDots: $('.ring2.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring3.card_slider').slick({
    dots: true,
    appendDots: $('.ring3.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring4.card_slider').slick({
    dots: true,
    appendDots: $('.ring4.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $('.ring5.card_slider').slick({
    dots: true,
    appendDots: $('.ring5.card_slider__pagination'),
    arrows: false,
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  //
  $('.main_promo_slider').slick({
    dots: true,
    appendDots: $('.main_promo_slider__pagination'),
    arrows: true,
    prevArrow: $('.main_promo .button-circle-left'),
    nextArrow: $('.main_promo .button-circle-right'),
    autoplay: false,
    autoplayspeed: 5000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  //
  $('.main_sale__slider').slick({
    dots: false,
    appendDots: $(),
    arrows: true,
    prevArrow: $('.main_sale .button-circle-left'),
    nextArrow: $('.main_sale .button-circle-right'),
    autoplay: false,
    autoplayspeed: 5000,
    infinite: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 4,
  });
});