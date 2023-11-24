let points = 0
let typeofTrash = 0
/*Tipo de lixo - definição:
0 - Papel ou não definido;
1 - Plastico;
2 - Metal;
3 - Vidro;
4 - Orgânico*/
const viewer = document.querySelector('[trash-viewer]')
const pointerView = document.getElementById('points')
let trash = document.getElementById('trash')
let leftPosi, topPosi = 0
let grabbed = false
const hBar = document.querySelector('.rBar')
const alertPoint = document.getElementById('alertPoint')
let DEVMode = false

changeTrash()

function changeTrash() {
    typeofTrash = Math.floor(Math.random() * 5)
    trash.className = 'item'
    if (typeofTrash == 0) {
        trash.classList.add('blue')
    } else if (typeofTrash == 1) {
        trash.classList.add('red')
    } else if (typeofTrash == 2) {
        trash.classList.add('yellow')
    } else if (typeofTrash == 3) {
        trash.classList.add('green')
    } else if (typeofTrash == 4) {
        trash.classList.add('brown')
    }

    leftPosi = Math.floor(Math.random() * 90)
    topPosi = Math.floor(Math.random() * 90)
    trash.style.top = `${topPosi}%`
    trash.style.left = `${leftPosi}%`
    grabbed = false
}

function grabTrash() {
    trash.style.display = 'none'
    if (typeofTrash == 0) {
        viewer.classList.add('blue')
    } else if (typeofTrash == 1) {
        viewer.classList.add('red')
    } else if (typeofTrash == 2) {
        viewer.classList.add('yellow')
    } else if (typeofTrash == 3) {
        viewer.classList.add('green')
    } else if (typeofTrash == 4) {
        viewer.classList.add('brown')
    }
    grabbed = true
}

function paperPicker() {
    if (grabbed) {
        if (typeofTrash == 0) {
            points = points + 2;
            alertPoint.classList.toggle('goodScore')
            alertPoint.innerText = '+2 Pontos!'
            setTimeout(() => {
                alertPoint.classList.toggle('goodScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        } else {
            points = points - 3;
            alertPoint.classList.toggle('badScore')
            alertPoint.innerText = '-3 Pontos :/'
            setTimeout(() => {
                alertPoint.classList.toggle('badScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        }
        trash.removeAttribute('style')
        pointerView.innerText = points
        viewer.className = 'viewer'
        changeTrash()
    }
}

function plasticPicker() {
    if (grabbed) {
        if (typeofTrash == 1) {
            points = points + 2;
            alertPoint.classList.toggle('goodScore')
            alertPoint.innerText = '+2 Pontos!'
            setTimeout(() => {
                alertPoint.classList.toggle('goodScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        } else {
            points = points - 3;
            alertPoint.classList.toggle('badScore')
            alertPoint.innerText = '-3 Pontos :/'
            setTimeout(() => {
                alertPoint.classList.toggle('badScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        }
        trash.removeAttribute('style')
        pointerView.innerText = points
        viewer.className = 'viewer'
        changeTrash()
    }
}

function metalPicker() {
    if (grabbed) {
        if (typeofTrash == 2) {
            points = points + 2;
            alertPoint.classList.toggle('goodScore')
            alertPoint.innerText = '+2 Pontos!'
            setTimeout(() => {
                alertPoint.classList.toggle('goodScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        } else {
            points = points - 3;
            alertPoint.classList.toggle('badScore')
            alertPoint.innerText = '-3 Pontos :/'
            setTimeout(() => {
                alertPoint.classList.toggle('badScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        }
        trash.removeAttribute('style')
        pointerView.innerText = points
        viewer.className = 'viewer'
        changeTrash()
    }
}

function glassPicker() {
    if (grabbed) {
        if (typeofTrash == 3) {
            points = points + 2;
            alertPoint.classList.toggle('goodScore')
            alertPoint.innerText = '+2 Pontos!'
            setTimeout(() => {
                alertPoint.classList.toggle('goodScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        } else {
            points = points - 3;
            alertPoint.classList.toggle('badScore')
            alertPoint.innerText = '-3 Pontos :/'
            setTimeout(() => {
                alertPoint.classList.toggle('badScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        }
        trash.removeAttribute('style')
        pointerView.innerText = points
        viewer.className = 'viewer'
        changeTrash()
    }
}

function organicPicker() {
    if (grabbed) {
        if (typeofTrash == 4) {
            points = points + 2;
            alertPoint.classList.toggle('goodScore')
            alertPoint.innerText = '+2 Pontos!'
            setTimeout(() => {
                alertPoint.classList.toggle('goodScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        } else {
            points = points - 3;
            alertPoint.classList.toggle('badScore')
            alertPoint.innerText = '-3 Pontos :/'
            setTimeout(() => {
                alertPoint.classList.toggle('badScore')
                setTimeout(() => {
                    alertPoint.innerText = ''
                }, 400);
            }, 1400);
        }
        trash.removeAttribute('style')
        pointerView.innerText = points
        viewer.className = 'viewer'
        changeTrash()
    }
}

function opencloseControls() {
    let controls = document.querySelector('.controls')
    controls.classList.toggle('opened')
}

function helpBar() {
    hBar.classList.toggle('hBarOpen')
}

function resetPosi() {
    leftPosi = Math.floor(Math.random() * 90)
    topPosi = Math.floor(Math.random() * 90)
    trash.style.top = `${topPosi}%`
    trash.style.left = `${leftPosi}%`
}

function G1DEVMode() {
    DEVMode = true
    alert('Modo Desenvolvedor ativado')
}

function changeTrashType(event) {
    if (DEVMode) {
        event.preventDefault()
        typeofTrash = prompt('Digite o novo valor do elemento: \n 0 - Papel; \n 1 - Plástico; \n 2 - Metal; \n 3 - Vidro e; \n 4 - Orgânico. \n Qualquer valor além desses pode resultar em perda do elemento e chance de perda de ponto em 100%')
        typeofTrash = parseInt(typeofTrash)
        trash.className = 'item'
        if (typeofTrash == 0) {
            trash.classList.add('blue')
        } else if (typeofTrash == 1) {
            trash.classList.add('red')
        } else if (typeofTrash == 2) {
            trash.classList.add('yellow')
        } else if (typeofTrash == 3) {
            trash.classList.add('green')
        } else if (typeofTrash == 4) {
            trash.classList.add('brown')
        }
    }
}

function removeDEVMode() {
    DEVMode = false
    alert('Modo Desenvolvedor desativado')
}