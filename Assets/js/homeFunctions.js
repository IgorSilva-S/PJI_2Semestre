const carousel = document.querySelector('.newsTrail')
const homeTitle = document.getElementById('newsText')
let carouselNum = 2

setInterval(() => {
 if (carouselNum == 2) {
    carousel.removeAttribute('style')
        carousel.style.left = '-100%'
        carouselNum = 3
        homeTitle.innerText = 'Contaminação da água, saiba os riscos'
    } else if (carouselNum == 3) {
        carousel.style.left = '-200%'
        carouselNum = 4
        homeTitle.innerText = 'Secas na Amazônia, entenda'
    } else if (carouselNum == 4) {
        carousel.style.left = '-300%'
        homeTitle.innerText = 'Projeto cultural em Ibirapuera'
        setTimeout(() => {
            carousel.style.transitionDuration = '0s'
            carousel.style.left = '0'
        }, 700);
        carouselNum = 2
    }
}, 5000);