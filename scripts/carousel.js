import { run, wait } from './helpers'
import Swiper from 'swiper'

run('.swiper-container', carousel => {
  const swiper = new Swiper(carousel, {
    breakpoints: {
      0: {
        centeredSlides: true,
      },
      640: {
        centeredSlides: false,
      },
    },
    grabCursor: true,
    scrollbar: {
      draggable: true,
      el: '.swiper-scrollbar',
    },
    slidesPerView: 'auto',
    spaceBetween: 48,
  })

  wait(500, () => swiper.update())
  wait(1000, () => swiper.update())
  wait(2000, () => swiper.update())
})
