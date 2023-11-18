const tr1 = document.getElementById('tr1')
const tr2 = document.getElementById('tr2')
const tr3 = document.getElementById('tr3')
const tr4 = document.getElementById('tr4')
let s1fill = false
let s2fill = false
let s3fill = false
let s4fill = false
let s1fType, s2fType, s3fType, s4fType
const create = document.querySelector('[game2-creation]')
/*Tipo de lixo - definição:
0 - Papel ou não definido;
1 - Plastico;
2 - Metal;
3 - Vidro
4 - Pano
5 - Papel Amassado
6 - Garrafa de vidro*/

tr1.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 7)
    tr1.className = 'trashs'
    if (random == 0) {
        tr1.classList.add('paper')
        tr1.value = 0
    } else if (random == 1) {
        tr1.classList.add('plastic')
        tr1.value = 1
    } else if (random == 2) {
        tr1.classList.add('metal')
        tr1.value = 2
    } else if (random == 3) {
        tr1.classList.add('glass')
        tr1.value = 3
    } else if (random == 4) {
        tr1.classList.add('rag')
        tr1.value = 4
    } else if (random == 5) {
        tr1.classList.add('crumpPaper')
        tr1.value = 5
    } else if (random == 6) {
        tr1.classList.add('gBottle')
        tr1.value = 6
    }
    tr1.removeAttribute('style')
})

tr2.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 7)
    tr2.className = 'trashs t2'
    if (random == 0) {
        tr2.classList.add('paper')
        tr2.value = 0
    } else if (random == 1) {
        tr2.classList.add('plastic')
        tr2.value = 1
    } else if (random == 2) {
        tr2.classList.add('metal')
        tr2.value = 2
    } else if (random == 3) {
        tr2.classList.add('glass')
        tr2.value = 3
    } else if (random == 4) {
        tr2.classList.add('rag')
        tr2.value = 4
    } else if (random == 5) {
        tr2.classList.add('crumpPaper')
        tr2.value = 5
    } else if (random == 6) {
        tr2.classList.add('gBottle')
        tr2.value = 6
    }
    tr2.removeAttribute('style')
})

tr3.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 7)
    tr3.className = 'trashs t3'
    if (random == 0) {
        tr3.classList.add('paper')
        tr3.value = 0
    } else if (random == 1) {
        tr3.classList.add('plastic')
        tr3.value = 1
    } else if (random == 2) {
        tr3.classList.add('metal')
        tr3.value = 2
    } else if (random == 3) {
        tr3.classList.add('glass')
        tr3.value = 3
    } else if (random == 4) {
        tr3.classList.add('rag')
        tr3.value = 4
    } else if (random == 5) {
        tr3.classList.add('crumpPaper')
        tr3.value = 5
    } else if (random == 6) {
        tr3.classList.add('gBottle')
        tr3.value = 6
    }
    tr3.removeAttribute('style')
})

tr4.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 7)
    tr4.className = 'trashs t4'
    if (random == 0) {
        tr4.classList.add('paper')
        tr4.value = 0
    } else if (random == 1) {
        tr4.classList.add('plastic')
        tr4.value = 1
    } else if (random == 2) {
        tr4.classList.add('metal')
        tr4.value = 2
    } else if (random == 3) {
        tr4.classList.add('glass')
        tr4.value = 3
    } else if (random == 4) {
        tr4.classList.add('rag')
        tr4.value = 4
    } else if (random == 5) {
        tr4.classList.add('crumpPaper')
        tr4.value = 5
    } else if (random == 6) {
        tr4.classList.add('gBottle')
        tr4.value = 6
    }
    tr4.removeAttribute('style')
})

// Grab trashes
function grabtr1() {
    let slot0 = document.getElementById('slot0')
    let slot1 = document.getElementById('slot1')
    let slot2 = document.getElementById('slot2')
    let slot3 = document.getElementById('slot3')
    if (s1fill == false) {
        slot0.className = 'slot'
        if (tr1.value == 0) {
            slot0.classList.add('paper')
            s1fill = true
            s1fType = 1
        } else if (tr1.value == 1) {
            slot0.classList.add('plastic')
            s1fill = true
            s1fType = 2
        } else if (tr1.value == 2) {
            slot0.classList.add('metal')
            s1fill = true
            s1fType = 3
        } else if (tr1.value == 3) {
            slot0.classList.add('glass')
            s1fill = true
            s1fType = 4
        } else if (tr1.value == 4) {
            slot0.classList.add('rag')
            s1fill = true
            s1fType = 5
        } else if (tr1.value == 5) {
            slot0.classList.add('crumpPaper')
            s1fill = true
            s1fType = 6
        } else if (tr1.value == 6) {
            slot0.classList.add('gBottle')
            s1fill = true
            s1fType = 7
        }
    } else if (s2fill == false) {
        slot1.className = 'slot'
        if (tr1.value == 0) {
            slot1.classList.add('paper')
            s2fill = true
            s2fType = 1
        } else if (tr1.value == 1) {
            slot1.classList.add('plastic')
            s2fill = true
            s2fType = 2
        } else if (tr1.value == 2) {
            slot1.classList.add('metal')
            s2fill = true
            s2fType = 3
        } else if (tr1.value == 3) {
            slot1.classList.add('glass')
            s2fill = true
            s2fType = 4
        } else if (tr1.value == 4) {
            slot1.classList.add('rag')
            s2fill = true
            s2fType = 5
        } else if (tr1.value == 5) {
            slot1.classList.add('crumpPaper')
            s2fill = true
            s2fType = 6
        } else if (tr1.value == 6) {
            slot1.classList.add('gBottle')
            s2fill = true
            s2fType = 7
        }
    } else if (s3fill == false) {
        slot2.className = 'slot'
        if (tr1.value == 0) {
            slot2.classList.add('paper')
            s3fill = true
            s3fType = 1
        } else if (tr1.value == 1) {
            slot2.classList.add('plastic')
            s3fill = true
            s3fType = 2
        } else if (tr1.value == 2) {
            slot2.classList.add('metal')
            s3fill = true
            s3fType = 3
        } else if (tr1.value == 3) {
            slot2.classList.add('glass')
            s3fill = true
            s3fType = 4
        } else if (tr1.value == 4) {
            slot2.classList.add('rag')
            s3fill = true
            s3fType = 5
        } else if (tr1.value == 5) {
            slot2.classList.add('crumpPaper')
            s3fill = true
            s3fType = 6
        } else if (tr1.value == 6) {
            slot2.classList.add('gBottle')
            s3fill = true
            s3fType = 7
        }
    } else if (s4fill == false) {
        slot3.className = 'slot'
        if (tr1.value == 0) {
            slot3.classList.add('paper')
            s4fill = true
            s4fType = 1
        } else if (tr1.value == 1) {
            slot3.classList.add('plastic')
            s4fill = true
            s4fType = 2
        } else if (tr1.value == 2) {
            slot3.classList.add('metal')
            s4fill = true
            s4fType = 3
        } else if (tr1.value == 3) {
            slot3.classList.add('glass')
            s4fill = true
            s4fType = 4
        } else if (tr1.value == 4) {
            slot3.classList.add('rag')
            s4fill = true
            s4fType = 5
        } else if (tr1.value == 5) {
            slot3.classList.add('crumpPaper')
            s4fill = true
            s4fType = 6
        } else if (tr1.value == 6) {
            slot3.classList.add('gBottle')
            s4fill = true
            s4fType = 7
        }
    }
    tr1.style.opacity = '0'
}

function grabtr2() {
    let slot0 = document.getElementById('slot0')
    let slot1 = document.getElementById('slot1')
    let slot2 = document.getElementById('slot2')
    let slot3 = document.getElementById('slot3')
    if (s1fill == false) {
        slot0.className = 'slot'
        if (tr2.value == 0) {
            slot0.classList.add('paper')
            s1fill = true
            s1fType = 1
        } else if (tr2.value == 1) {
            slot0.classList.add('plastic')
            s1fill = true
            s1fType = 2
        } else if (tr2.value == 2) {
            slot0.classList.add('metal')
            s1fill = true
            s1fType = 3
        } else if (tr2.value == 3) {
            slot0.classList.add('glass')
            s1fill = true
            s1fType = 4
        } else if (tr2.value == 4) {
            slot0.classList.add('rag')
            s1fill = true
            s1fType = 5
        } else if (tr2.value == 5) {
            slot0.classList.add('crumpPaper')
            s1fill = true
            s1fType = 6
        } else if (tr2.value == 6) {
            slot0.classList.add('gBottle')
            s1fill = true
            s1fType = 7
        }
    } else if (s2fill == false) {
        slot1.className = 'slot'
        if (tr2.value == 0) {
            slot1.classList.add('paper')
            s2fill = true
            s2fType = 1
        } else if (tr2.value == 1) {
            slot1.classList.add('plastic')
            s2fill = true
            s2fType = 2
        } else if (tr2.value == 2) {
            slot1.classList.add('metal')
            s2fill = true
            s2fType = 3
        } else if (tr2.value == 3) {
            slot1.classList.add('glass')
            s2fill = true
            s2fType = 4
        } else if (tr2.value == 4) {
            slot1.classList.add('rag')
            s2fill = true
            s2fType = 5
        } else if (tr2.value == 5) {
            slot1.classList.add('crumpPaper')
            s2fill = true
            s2fType = 6
        } else if (tr2.value == 6) {
            slot1.classList.add('gBottle')
            s2fill = true
            s2fType = 7
        }
    } else if (s3fill == false) {
        slot2.className = 'slot'
        if (tr2.value == 0) {
            slot2.classList.add('paper')
            s3fill = true
            s3fType = 1
        } else if (tr2.value == 1) {
            slot2.classList.add('plastic')
            s3fill = true
            s3fType = 2
        } else if (tr2.value == 2) {
            slot2.classList.add('metal')
            s3fill = true
            s3fType = 3
        } else if (tr2.value == 3) {
            slot2.classList.add('glass')
            s3fill = true
            s3fType = 4
        } else if (tr2.value == 4) {
            slot2.classList.add('rag')
            s3fill = true
            s3fType = 5
        } else if (tr2.value == 5) {
            slot2.classList.add('crumpPaper')
            s3fill = true
            s3fType = 6
        } else if (tr2.value == 6) {
            slot2.classList.add('gBottle')
            s3fill = true
            s3fType = 7
        }
    } else if (s4fill == false) {
        slot3.className = 'slot'
        if (tr2.value == 0) {
            slot3.classList.add('paper')
            s4fill = true
            s4fType = 1
        } else if (tr2.value == 1) {
            slot3.classList.add('plastic')
            s4fill = true
            s4fType = 2
        } else if (tr2.value == 2) {
            slot3.classList.add('metal')
            s4fill = true
            s4fType = 3
        } else if (tr2.value == 3) {
            slot3.classList.add('glass')
            s4fill = true
            s4fType = 4
        } else if (tr2.value == 4) {
            slot3.classList.add('rag')
            s4fill = true
            s4fType = 5
        } else if (tr2.value == 5) {
            slot3.classList.add('crumpPaper')
            s4fill = true
            s4fType = 6
        } else if (tr2.value == 6) {
            slot3.classList.add('gBottle')
            s4fill = true
            s4fType = 7
        }
    }
    tr2.style.opacity = '0'
}

function grabtr3() {
    let slot0 = document.getElementById('slot0')
    let slot1 = document.getElementById('slot1')
    let slot2 = document.getElementById('slot2')
    let slot3 = document.getElementById('slot3')
    if (s1fill == false) {
        slot0.className = 'slot'
        if (tr3.value == 0) {
            slot0.classList.add('paper')
            s1fill = true
            s1fType = 1
        } else if (tr3.value == 1) {
            slot0.classList.add('plastic')
            s1fill = true
            s1fType = 2
        } else if (tr3.value == 2) {
            slot0.classList.add('metal')
            s1fill = true
            s1fType = 3
        } else if (tr3.value == 3) {
            slot0.classList.add('glass')
            s1fill = true
            s1fType = 4
        } else if (tr3.value == 4) {
            slot0.classList.add('rag')
            s1fill = true
            s1fType = 5
        } else if (tr3.value == 5) {
            slot0.classList.add('crumpPaper')
            s1fill = true
            s1fType = 6
        } else if (tr3.value == 6) {
            slot0.classList.add('gBottle')
            s1fill = true
            s1fType = 7
        }
    } else if (s2fill == false) {
        slot1.className = 'slot'
        if (tr3.value == 0) {
            slot1.classList.add('paper')
            s2fill = true
            s2fType = 1
        } else if (tr3.value == 1) {
            slot1.classList.add('plastic')
            s2fill = true
            s2fType = 2
        } else if (tr3.value == 2) {
            slot1.classList.add('metal')
            s2fill = true
            s2fType = 3
        } else if (tr3.value == 3) {
            slot1.classList.add('glass')
            s2fill = true
            s2fType = 4
        } else if (tr3.value == 4) {
            slot1.classList.add('rag')
            s2fill = true
            s2fType = 5
        } else if (tr3.value == 5) {
            slot1.classList.add('crumpPaper')
            s2fill = true
            s2fType = 6
        } else if (tr3.value == 6) {
            slot1.classList.add('gBottle')
            s2fill = true
            s2fType = 7
        }
    } else if (s3fill == false) {
        slot2.className = 'slot'
        if (tr3.value == 0) {
            slot2.classList.add('paper')
            s3fill = true
            s3fType = 1
        } else if (tr3.value == 1) {
            slot2.classList.add('plastic')
            s3fill = true
            s3fType = 2
        } else if (tr3.value == 2) {
            slot2.classList.add('metal')
            s3fill = true
            s3fType = 3
        } else if (tr3.value == 3) {
            slot2.classList.add('glass')
            s3fill = true
            s3fType = 4
        } else if (tr3.value == 4) {
            slot2.classList.add('rag')
            s3fill = true
            s3fType = 5
        } else if (tr3.value == 5) {
            slot2.classList.add('crumpPaper')
            s3fill = true
            s3fType = 6
        } else if (tr3.value == 6) {
            slot2.classList.add('gBottle')
            s3fill = true
            s3fType = 7
        }
    } else if (s4fill == false) {
        slot3.className = 'slot'
        if (tr3.value == 0) {
            slot3.classList.add('paper')
            s4fill = true
            s4fType = 1
        } else if (tr3.value == 1) {
            slot3.classList.add('plastic')
            s4fill = true
            s4fType = 2
        } else if (tr3.value == 2) {
            slot3.classList.add('metal')
            s4fill = true
            s4fType = 3
        } else if (tr3.value == 3) {
            slot3.classList.add('glass')
            s4fill = true
            s4fType = 4
        } else if (tr3.value == 4) {
            slot3.classList.add('rag')
            s4fill = true
            s4fType = 5
        } else if (tr3.value == 5) {
            slot3.classList.add('crumpPaper')
            s4fill = true
            s4fType = 6
        } else if (tr3.value == 6) {
            slot3.classList.add('gBottle')
            s4fill = true
            s4fType = 7
        }
    }
    tr3.style.opacity = '0'
}

function grabtr4() {
    let slot0 = document.getElementById('slot0')
    let slot1 = document.getElementById('slot1')
    let slot2 = document.getElementById('slot2')
    let slot3 = document.getElementById('slot3')
    if (s1fill == false) {
        slot0.className = 'slot'
        if (tr4.value == 0) {
            slot0.classList.add('paper')
            s1fill = true
            s1fType = 1
        } else if (tr4.value == 1) {
            slot0.classList.add('plastic')
            s1fill = true
            s1fType = 2
        } else if (tr4.value == 2) {
            slot0.classList.add('metal')
            s1fill = true
            s1fType = 3
        } else if (tr4.value == 3) {
            slot0.classList.add('glass')
            s1fill = true
            s1fType = 4
        } else if (tr4.value == 4) {
            slot0.classList.add('rag')
            s1fill = true
            s1fType = 5
        } else if (tr4.value == 5) {
            slot0.classList.add('crumpPaper')
            s1fill = true
            s1fType = 6
        } else if (tr4.value == 6) {
            slot0.classList.add('gBottle')
            s1fill = true
            s1fType = 7
        }
    } else if (s2fill == false) {
        slot1.className = 'slot'
        if (tr4.value == 0) {
            slot1.classList.add('paper')
            s2fill = true
            s2fType = 1
        } else if (tr4.value == 1) {
            slot1.classList.add('plastic')
            s2fill = true
            s2fType = 2
        } else if (tr4.value == 2) {
            slot1.classList.add('metal')
            s2fill = true
            s2fType = 3
        } else if (tr4.value == 3) {
            slot1.classList.add('glass')
            s2fill = true
            s2fType = 4
        } else if (tr4.value == 4) {
            slot1.classList.add('rag')
            s2fill = true
            s2fType = 5
        } else if (tr4.value == 5) {
            slot1.classList.add('crumpPaper')
            s2fill = true
            s2fType = 6
        } else if (tr4.value == 6) {
            slot1.classList.add('gBottle')
            s2fill = true
            s2fType = 7
        }
    } else if (s3fill == false) {
        slot2.className = 'slot'
        if (tr4.value == 0) {
            slot2.classList.add('paper')
            s3fill = true
            s3fType = 1
        } else if (tr4.value == 1) {
            slot2.classList.add('plastic')
            s3fill = true
            s3fType = 2
        } else if (tr4.value == 2) {
            slot2.classList.add('metal')
            s3fill = true
            s3fType = 3
        } else if (tr4.value == 3) {
            slot2.classList.add('glass')
            s3fill = true
            s3fType = 4
        } else if (tr4.value == 4) {
            slot2.classList.add('rag')
            s3fill = true
            s3fType = 5
        } else if (tr4.value == 5) {
            slot2.classList.add('crumpPaper')
            s3fill = true
            s3fType = 6
        } else if (tr4.value == 6) {
            slot2.classList.add('gBottle')
            s3fill = true
            s3fType = 7
        }
    } else if (s4fill == false) {
        slot3.className = 'slot'
        if (tr4.value == 0) {
            slot3.classList.add('paper')
            s4fill = true
            s4fType = 1
        } else if (tr4.value == 1) {
            slot3.classList.add('plastic')
            s4fill = true
            s4fType = 2
        } else if (tr4.value == 2) {
            slot3.classList.add('metal')
            s4fill = true
            s4fType = 3
        } else if (tr4.value == 3) {
            slot3.classList.add('glass')
            s4fill = true
            s4fType = 4
        } else if (tr4.value == 4) {
            slot3.classList.add('rag')
            s4fill = true
            s4fType = 5
        } else if (tr4.value == 5) {
            slot3.classList.add('crumpPaper')
            s4fill = true
            s4fType = 6
        } else if (tr4.value == 6) {
            slot3.classList.add('gBottle')
            s4fill = true
            s4fType = 7
        }
    }
    tr4.style.opacity = '0'
}

function removeSl0() {
    let slot0 = document.getElementById('slot0')
    slot0.className = 'slot'
    s1fill = false
}

function removeSl1() {
    let slot1 = document.getElementById('slot1')
    slot1.className = 'slot'
    s2fill = false
}

function removeSl2() {
    let slot2 = document.getElementById('slot2')
    slot2.className = 'slot'
    s3fill = false
}

function removeSl3() {
    let slot3 = document.getElementById('slot3')
    slot3.className = 'slot'
    s4fill = false
}

function clearSlots() {
    slot0.className = 'slot'
    s1fill = false
    slot1.className = 'slot'
    s2fill = false
    slot2.className = 'slot'
    s3fill = false
    slot3.className = 'slot'
    s4fill = false
}

function createObj() {
    /*Tipo de lixo - definição verificação:
    1 - Papel;
    2 - Plastico;
    3 - Metal;
    4 - Vidro
    5 - Pano
    6 - Papel Amassado
    7 - Garrafa de vidro*/
    create.className = 'creation'
    if (s1fill && s2fill & s3fill && s4fill) {
        let v1 = s1fType
        let v2 = s2fType
        let v3 = s3fType
        let v4 = s4fType
        let resultTypes = v1 + v2 + v3 + v4
        if (resultTypes == 17) {
            if ((v1 == 5 || v1 == 1 || v1 == 6) && (v2 == 5 || v2 == 1 || v2 == 6) && (v3 == 5 || v3 == 1 || v3 == 6) && (v4 == 5 || v4 == 1 || v4 == 6)) {
                create.classList.add('ragDoll')
                clearSlots()
            } else {
                alert(`Não há criações para os objetos selecionados`)
            }
        } else if (resultTypes == 16) {
            if ((v1 == 5 || v1 == 3) && (v2 == 5 || v2 == 3) && (v3 == 5 || v3 == 3) && (v4 == 5 || v4 == 3)) {
                create.classList.add('telephone')
                clearSlots()
            } else {
                alert(`Não há criações para os objetos selecionados`)
            }
        } else if (resultTypes == 8) {
            if ((v1 == 3 || v1 == 2 || v1 == 1) && (v2 == 3 || v2 == 2 || v2 == 1) && (v3 == 3 || v3 == 2 || v3 == 1) && (v4 == 3 || v4 == 2 || v4 == 1)) {
                create.classList.add('cardboxToy')
                clearSlots()
            } else {
                alert(`Não há criações para os objetos selecionados`)
            }
        } else if (resultTypes == 23) {
            if ((v1 == 5 || v1 == 6 || v1 == 7) && (v2 == 5 || v2 == 6 || v2 == 7) && (v3 == 5 || v3 == 6 || v3 == 7) && (v4 == 5 || v4 == 6 || v4 == 7)) {
                create.classList.add('glassVase')
                clearSlots()
            } else {
                alert(`Não há criações para os objetos selecionados`)
            }
        } else if (resultTypes == 19) {
            if ((v1 == 3 || v1 == 5 || v1 == 6) && (v2 == 3 || v2 == 5 || v2 == 6) && (v3 == 3 || v3 == 5 || v3 == 6) && (v4 == 3 || v4 == 5 || v4 == 6)) {
                create.classList.add('tinDrum')
                clearSlots()
            } else {
                alert(`Não há criações para os objetos selecionados`)
            }
        }
        /*if (s1fType == 5 && s2fType == 5 && s3fType == 1 && s4fType == 6) {
            create.classList.add('ragDoll')
            clearSlots()
        } else if (s1fType == 3 && s2fType == 5 && s3fType == 3 && s4fType == 5) {
            create.classList.add('telephone')
            clearSlots()
        } else if (s1fType == 1 && s2fType == 2 && s3fType == 2 && s4fType == 3) {
            create.classList.add('cardboxToy')
            clearSlots()
        } else if (s1fType == 7 && s2fType == 5 & s3fType == 5 && s4fType == 6) {
            create.classList.add('glassVase')
            clearSlots()
        } else if (s1fType == 3 && s2fType  == 5 && s3fType == 5 && s4fType == 6) {
            create.classList.add('tinDrum')
            clearSlots()
        }*/
        else {
            alert(`Não há criações para os objetos selecionados`)
        }
    }
    else {
        alert(`É necessário preencher todos os slots para criar um objeto`)
    }

}

function opencloseControls() {
    let controls = document.querySelector('.controls')
    controls.classList.toggle('opened')
}
