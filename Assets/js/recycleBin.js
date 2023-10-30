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

    leftPosi = Math.floor(Math.random() * 100)
    topPosi = Math.floor(Math.random() * 100)
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
    } else {
        points = points - 3;
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
    } else {
        points = points - 3;
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
    } else {
        points = points - 3;
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
    } else {
        points = points - 3;
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
    } else {
        points = points - 3;
    }
    trash.removeAttribute('style')
    pointerView.innerText = points
    viewer.className = 'viewer'
    changeTrash()
}
}