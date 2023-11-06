const carousel = document.querySelector('.newsTrail')
let carouselNum = 2

setInterval(() => {
 if (carouselNum == 2) {
    carousel.removeAttribute('style')
        carousel.style.left = '-100%'
        carouselNum = 3
    } else if (carouselNum == 3) {
        carousel.style.left = '-200%'
        carouselNum = 4
    } else if (carouselNum == 4) {
        carousel.style.left = '-300%'
        setTimeout(() => {
            carousel.style.transitionDuration = '0s'
            carousel.style.left = '0'
        }, 700);
        carouselNum = 2
    }
}, 5000);