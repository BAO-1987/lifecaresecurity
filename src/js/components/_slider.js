import Swiper, {
  Navigation
} from 'swiper';

const slider = new Swiper('.slider__swiper', {
  slidesPerView: 1.1,
  spaceBetween: 20,
  modules: [Navigation],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider__swiper .btn--next',
    prevEl: '.slider__swiper .btn--prev',
  },

  breakpoints: {

    375: {
      slidesPerView: 1.1,
    },

    475: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 3.5,
    },
  },

});