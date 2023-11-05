const LeftBar = document.querySelector('.lbar')
const buttonLbar = document.querySelector('.barButton')
const LangPop = document.getElementById('langPop')
let LangOpened = false

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

function appearLangPop() {
    if (!LangOpened) {
    LangPop.style.transform = 'scaleY(1)'
    LangOpened = true
    } else {
        LangPop.removeAttribute('style')
        LangOpened = false
    }
}