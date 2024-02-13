import Swiper from 'swiper';
import throttle from 'lodash.throttle';
// import Swiper styles
// import 'swiper/css';

// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',
//   loop: true,
// });

// const callback = () => {
//   console.log(window.innerWidth);
// };

// window.addEventListener('resize', throttle(callback, 300));
$('.slider').slick({
  // normal options...
  infinite: false,

  // the magic
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 300,
      settings: 'unslick', // destroys slick
    },
  ],
});
