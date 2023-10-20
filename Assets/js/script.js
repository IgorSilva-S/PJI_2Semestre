const LeftBar = document.querySelector('.lbar')
const buttonLbar = document.querySelector('.barButton')

function openLbar() {
    LeftBar.style.left = '0'
    buttonLbar.style.display = 'none'
}

function closeLbar() {
    LeftBar.style.left = '-25%'
    setTimeout(() => {
        buttonLbar.removeAttribute('style')
    }, 160);
}