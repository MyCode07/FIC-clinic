import Swiper from 'swiper';
import { Pagination, Autoplay, Thumbs, Navigation } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (slider.closest('.hero')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                slidesPerView: 1,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },
            })
        }
        if (slider.closest('.consultations')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    1025: {
                        slidesPerView: 3,
                    },
                }
            })
        }
        if (slider.closest('.video')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation, Pagination],
                slidesPerView: 4,
                spaceBetween: 20,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    type: 'bullets',
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 2,
                    },
                    500: {
                        slidesPerView: 3,
                    },
                    1025: {
                        slidesPerView: 4,
                    },
                }
            })
        }
    })
}


