import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".top__slider", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    simulateTouch: false,
    keyboard: {
        enabled: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


