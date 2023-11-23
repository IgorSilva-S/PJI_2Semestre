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
let phrase = 'Não há criações para os objetos selecionados'
let alertPh = 'É necessário preencher todos os slots para criar um objeto'
let header = 'Futuro em Ação: Criação reciclável'
let comboPhraseNone = 'Não tem combinações salvas, continue criando para descobrir novas criações'
let comboPhraseNComplete = 'Ainda tem outras combinações, continue criando!'
let comboPhraseComplete = 'Você achou todas as combinações disponíveis! Parabéns!'
let comboDEV = 'Modo de desenvolvedor'
let DEVMode = false
let enStyle = localStorage.getItem('English')
let lang = 'pt-br'
const hBar = document.querySelector('[game2-helpBar]')
const hbarPhrase = document.querySelector('.alertBox')
let paused = false
let grabbed1 = false
let grabbed2 = false
let grabbed3 = false
let grabbed4 = false

//Items
const rDoll = document.getElementById('rDoll')
const gVase = document.getElementById('gVase')
const gBlack = document.getElementById('gBlack')
const mirror = document.getElementById('mirror')
const cbToy = document.getElementById('cbToy')
const puppet = document.getElementById('puppet')
const cbTv = document.getElementById('cbTv')
const tel = document.getElementById('tel')
const t2 = document.getElementById('t2')
const t1 = document.getElementById('t1')
const pRocket = document.getElementById('pRocket')
const tDrum = document.getElementById('tDrum')
const stilt = document.getElementById('stilt')

if (enStyle == 1) {
    phrase = 'There are no creations for the selected objects'
    header = 'Future in Action: Recyclable Creation'
    alertPh = 'All slots must be filled to create an object'
    lang = 'en'
    document.getElementById('header').innerText = header
    document.getElementById('lang').lang = lang
    comboPhraseNone = "You don't have any saved combinations, keep creating to discover new creations"
    comboPhraseNComplete = "There are still other combinations, keep creating!"
    comboPhraseComplete = "You found all the available combinations! Congratulations!"
    comboDEV = "DEV Mode"
}

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
    grabbed1 = false
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
    grabbed2 = false
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
    grabbed3 = false
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
    grabbed4 = false
})

// Grab trashes
function grabtr1() {
    let slot0 = document.getElementById('slot0')
    let slot1 = document.getElementById('slot1')
    let slot2 = document.getElementById('slot2')
    let slot3 = document.getElementById('slot3')
    if (!grabbed1) {
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
}
    if (!DEVMode) {
    tr1.style.opacity = '0'
    grabbed1 = true
    }
}

function grabtr2() {
    let slot0 = document.getElementById('slot0')
    let slot1 = document.getElementById('slot1')
    let slot2 = document.getElementById('slot2')
    let slot3 = document.getElementById('slot3')
    if (!grabbed2) {
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
}
    if (!DEVMode) {
    tr2.style.opacity = '0'
    grabbed2 = true
    }
}

function grabtr3() {
    let slot0 = document.getElementById('slot0')
    let slot1 = document.getElementById('slot1')
    let slot2 = document.getElementById('slot2')
    let slot3 = document.getElementById('slot3')
    if (!grabbed3) {
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
}
    if (!DEVMode) {
    tr3.style.opacity = '0'
    grabbed3 = true
    }
}

function grabtr4() {
    let slot0 = document.getElementById('slot0')
    let slot1 = document.getElementById('slot1')
    let slot2 = document.getElementById('slot2')
    let slot3 = document.getElementById('slot3')
    if (!grabbed4) {
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
}
    if (!DEVMode) {
    tr4.style.opacity = '0'
    grabbed4 = true
    }
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
                rDoll.value = 1
                rDoll.style.display = 'flex'
            } else if ((v1 == 5 || v1 == 2) && (v2 == 5 || v2 == 2) && (v3 == 5 || v3 == 2) && (v4 == 5 || v4 == 2)) {
                create.classList.add('puppet')
                clearSlots()
                puppet.value = 1
                puppet.style.display = 'flex'
            } else if ((v1 == 4 || v1 == 1 || v1 == 6) && (v2 == 4 || v2 == 1 || v2 == 6) && (v3 == 4 || v3 == 1 || v3 == 6) && (v4 == 4 || v4 == 1 || v4 == 6)) {
                create.classList.add('mirror')
                clearSlots()
                mirror.value = 1
                mirror.style.display = 'flex'
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 16) {
            if ((v1 == 5 || v1 == 3) && (v2 == 5 || v2 == 3) && (v3 == 5 || v3 == 3) && (v4 == 5 || v4 == 3)) {
                create.classList.add('telephone')
                clearSlots()
                tel.value = 1
                tel.style.display = 'flex'
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 8) {
            if ((v1 == 3 || v1 == 2 || v1 == 1) && (v2 == 3 || v2 == 2 || v2 == 1) && (v3 == 3 || v3 == 2 || v3 == 1) && (v4 == 3 || v4 == 2 || v4 == 1)) {
                if (v1 == 2 && v2 == 2 && v3 == 2 && v4 == 2) {
                    alert(phrase)
                } else {
                    create.classList.add('cardboxToy')
                    clearSlots()
                    cbToy.value = 1
                    cbToy.style.display = 'flex'
                }
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 23) {
            if ((v1 == 5 || v1 == 6 || v1 == 7) && (v2 == 5 || v2 == 6 || v2 == 7) && (v3 == 5 || v3 == 6 || v3 == 7) && (v4 == 5 || v4 == 6 || v4 == 7)) {
                create.classList.add('glassVase')
                clearSlots()
                gVase.value = 1
                gVase.style.display = 'flex'
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 19) {
            if ((v1 == 3 || v1 == 5 || v1 == 6) && (v2 == 3 || v2 == 5 || v2 == 6) && (v3 == 3 || v3 == 5 || v3 == 6) && (v4 == 3 || v4 == 5 || v4 == 6)) {
                create.classList.add('tinDrum')
                clearSlots()
                tDrum.value = 1
                tDrum.style.display = 'flex'
            } else if ((v1 == 2 || v1 == 5 || v1 == 6) && (v2 == 2 || v2 == 5 || v2 == 6) && (v3 == 2 || v3 == 5 || v3 == 6) && (v4 == 2 || v4 == 5 || v4 == 6)){
                create.classList.add('toy1')
                t1.value = 1
                t1.style.display = 'flex'
                clearSlots()
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 5) {
            if ((v1 == 1 || v1 == 2) && (v2 == 1 || v2 == 2) && (v3 == 1 || v3 == 2) && (v4 == 1 || v4 == 2)) {
                create.classList.add('plasticRocket')
                clearSlots()
                pRocket.value = 1
                pRocket.style.display = 'flex'
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 13) {
            if ((v1 == 2 || v1 == 3 || v1 == 5) && (v2 == 2 || v2 == 3 || v2 == 5) && (v3 == 2 || v3 == 3 || v3 == 5) && (v4 == 2 || v4 == 3 || v4 == 5)) {
                create.classList.add('stilt')
                clearSlots()
                stilt.value = 1
                stilt.style.display = 'flex'
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 14) {
            if ((v1 == 2 || v1 == 5) && (v2 == 2 || v2 == 5) && (v3 == 2 || v3 == 5) && (v4 == 2 || v4 == 5)) {
                create.classList.add('toy2')
                clearSlots()
                t2.value = 1
                t2.style.display = 'flex'
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 15) {
            if ((v1 == 4 || v1 == 1 || v1 == 6) && (v2 == 4 || v2 == 1 || v2 == 6) && (v3 == 4 || v3 == 1 || v3 == 6) && (v4 == 4 || v4 == 1 || v4 == 6)) {
                create.classList.add('glassBlack')
                clearSlots()
                gBlack.value = 1
                gBlack.style.display = 'flex'
            } else {
                alert(phrase)
            }
        } else if (resultTypes == 11) {
            if ((v1 == 1 || v1 == 2 || v1 == 6) && (v2 == 1 || v2 == 2 || v2 == 6) && (v3 == 1 || v3 == 2 || v3 == 6) && (v4 == 1 || v4 == 2 || v4 == 6)) {
                create.classList.add('cardboardTv')
                clearSlots()
                cbTv.value = 1
                cbTv.style.display = 'flex'
            } else {
                alert(phrase)
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
            alert(phrase)
        }
    }
    else {
        alert(alertPh)
    }
}

function opencloseControls() {
    let controls = document.querySelector('.controls')
    controls.classList.toggle('opened')
}

function helpBar() {
    hBar.classList.toggle('hBarOpen')
}

function G2DEVMode() {
    rDoll.style.display = 'flex'
    gVase.style.display = 'flex'
    gBlack.style.display = 'flex'
    mirror.style.display = 'flex'
    cbToy.style.display = 'flex'
    puppet.style.display = 'flex'
    cbTv.style.display = 'flex'
    tel.style.display = 'flex'
    t2.style.display = 'flex'
    t1.style.display = 'flex'
    pRocket.style.display = 'flex'
    tDrum.style.display = 'flex'
    stilt.style.display = 'flex'
    DEVMode = true
    hbarPhrase.innerText = comboDEV
    document.querySelector('.pauseB').style.display = 'flex'
}

function removeDEVMode() {
    hbarPhrase.innerText = ''
    document.querySelector('.pauseB').style.display = 'none'
    pauseGame()
    rDoll.style.display = 'none'
    gVase.style.display = 'none'
    gBlack.style.display = 'none'
    mirror.style.display = 'none'
    cbToy.style.display = 'none'
    puppet.style.display = 'none'
    cbTv.style.display = 'none'
    tel.style.display = 'none'
    t2.style.display = 'none'
    t1.style.display = 'none'
    pRocket.style.display = 'none'
    tDrum.style.display = 'none'
    stilt.style.display = 'none'
    DEVMode = false
}

//Verificar valores no site com DEV Mode

function viewCardboxValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('Cardbox value is: 1')
        } else {
            alert('O Valor da caixa de papelão é: 1')
        }
    }
}

function viewPlasticBottleValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('Plastic bottle value is: 2')
        } else {
            alert('O Valor da garrafa de plastico é: 2')
        }
    }
}

function viewMetalCanValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('Metal can value is: 3')
        } else {
            alert('O Valor da lata de metal é: 3')
        }
    }
}

function viewGlassPaneValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('Glass pane value is: 4')
        } else {
            alert('O Valor do painel de vidro é: 4')
        }
    }
}

function viewRagValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('Rag value is: 5')
        } else {
            alert('O Valor do pano é: 5')
        }
    }
}

function viewCrumpPaperValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('Crumped paper value is: 6')
        } else {
            alert('O Valor do papel amassado é: 6')
        }
    }
}

function viewGlassBottleValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('Glass bottle value is: 7')
        } else {
            alert('O Valor da garrafa de vidro é: 7')
        }
    }
}

function viewRDollValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Rag Doll is: 17')
        } else {
            alert('O Valor da soma para se criar a Boneca de Pano é: 17')
        }
    }
}

function viewGVaseValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Glass Vase is: 23')
        } else {
            alert('O Valor da soma para se criar o vaso de vidro é: 23')
        }
    }
}

function viewGBlackValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Glass Blackboard is: 15')
        } else {
            alert('O Valor da soma para se criar a Lousa de Vidro é: 15')
        }
    }
}

function viewMirrorValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Mirror is: 17')
        } else {
            alert('O Valor da soma para se criar o Espelho é: 17')
        }
    }
}

function viewCBToyValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Cardbox Toy is: 8')
        } else {
            alert('O Valor da soma para se criar o Brinquedo de Papelão é: 8')
        }
    }
}

function viewPuppetValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Puppet is: 17')
        } else {
            alert('O Valor da soma para se criar o fantosche é: 17')
        }
    }
}

function viewCBTvValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Cardbox TV is: 11')
        } else {
            alert('O Valor da soma para se criar a TV de papelão é: 11')
        }
    }
}

function viewTelValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Telephone is: 16')
        } else {
            alert('O Valor da soma para se criar o Telefone é: 16')
        }
    }
}

function viewT2Value(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Toy 2 is: 14')
        } else {
            alert('O Valor da soma para se criar o Brinquedo nº 2 é: 14')
        }
    }
}

function viewT1Value(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Toy 1 is: 19')
        } else {
            alert('O Valor da soma para se criar o Brinquedo nº 1 é: 19')
        }
    }
}

function viewPRocketValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Plastic Rocket is: 5')
        } else {
            alert('O Valor da soma para se criar o Foguete de Plástico é: 5')
        }
    }
}

function viewTDrumValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Tin Drum is: 19')
        } else {
            alert('O Valor da soma para se criar o Tambor de Metal é: 19')
        }
    }
}

function viewStiltValue(event) {
    if (DEVMode) {
        event.preventDefault()
        if (enStyle == 1) {
            alert('The sum value to get Stilt is: 13')
        } else {
            alert('O Valor da soma para se criar o Pé de Lata é: 13')
        }
    }
}

function pauseGame() {
    if (DEVMode) {
        if (!paused) {
        tr1.style.animationPlayState = 'paused'
        tr2.style.animationPlayState = 'paused'
        tr3.style.animationPlayState = 'paused'
        tr4.style.animationPlayState = 'paused'
        document.querySelector('.conveyorTexture').style.animationPlayState = 'paused'
        paused = true
        } else {
            tr1.removeAttribute('style')
            tr2.removeAttribute('style')
            tr3.removeAttribute('style')
            tr4.removeAttribute('style')
            document.querySelector('.conveyorTexture').removeAttribute('style')
            paused = false
        }
    } else {
        alert(`Ative Modo de Desenvolvedor`)
    }
}

function changeValue1(event) {
    if (DEVMode) {
        event.preventDefault() 
        let newValue = prompt(`Digite o novo valor para o 1º Elemento (0 até 6)`)
        newValue = parseInt(newValue)
        tr1.className = 'trashs'
        if (newValue == 0) {
            tr1.classList.add('paper')
            tr1.value = 0
        } else if (newValue == 1) {
            tr1.classList.add('plastic')
            tr1.value = 1
        } else if (newValue == 2) {
            tr1.classList.add('metal')
            tr1.value = 2
        } else if (newValue == 3) {
            tr1.classList.add('glass')
            tr1.value = 3
        } else if (newValue == 4) {
            tr1.classList.add('rag')
            tr1.value = 4
        } else if (newValue == 5) {
            tr1.classList.add('crumpPaper')
            tr1.value = 5
        } else if (newValue == 6) {
            tr1.classList.add('gBottle')
            tr1.value = 6
        } else {
            alert("Valor não se encaixa. Veja os valores na lista de criações")
        }
    }
}

function changeValue2(event) {
    if (DEVMode) {
        event.preventDefault() 
        let newValue = prompt(`Digite o novo valor para o 2º Elemento (0 até 6)`)
        newValue = parseInt(newValue)
        tr2.className = 'trashs t2'
        if (newValue == 0) {
            tr2.classList.add('paper')
            tr2.value = 0
        } else if (newValue == 1) {
            tr2.classList.add('plastic')
            tr2.value = 1
        } else if (newValue == 2) {
            tr2.classList.add('metal')
            tr2.value = 2
        } else if (newValue == 3) {
            tr2.classList.add('glass')
            tr2.value = 3
        } else if (newValue == 4) {
            tr2.classList.add('rag')
            tr2.value = 4
        } else if (newValue == 5) {
            tr2.classList.add('crumpPaper')
            tr2.value = 5
        } else if (newValue == 6) {
            tr2.classList.add('gBottle')
            tr2.value = 6
        } else {
            alert("Valor não se encaixa. Veja os valores na lista de criações")
        }
    }
}

function changeValue3(event) {
    if (DEVMode) {
        event.preventDefault() 
        let newValue = prompt(`Digite o novo valor para o 3º Elemento (0 até 6)`)
        newValue = parseInt(newValue)
        tr3.className = 'trashs t3'
        if (newValue == 0) {
            tr3.classList.add('paper')
            tr3.value = 0
        } else if (newValue == 1) {
            tr3.classList.add('plastic')
            tr3.value = 1
        } else if (newValue == 2) {
            tr3.classList.add('metal')
            tr3.value = 2
        } else if (newValue == 3) {
            tr3.classList.add('glass')
            tr3.value = 3
        } else if (newValue == 4) {
            tr3.classList.add('rag')
            tr3.value = 4
        } else if (newValue == 5) {
            tr3.classList.add('crumpPaper')
            tr3.value = 5
        } else if (newValue == 6) {
            tr3.classList.add('gBottle')
            tr3.value = 6
        } else {
            alert("Valor não se encaixa. Veja os valores na lista de criações")
        }
    }
}

function changeValue4(event) {
    if (DEVMode) {
        event.preventDefault() 
        let newValue = prompt(`Digite o novo valor para o 4º Elemento (0 até 6)`)
        newValue = parseInt(newValue)
        tr4.className = 'trashs t4'
        if (newValue == 0) {
            tr4.classList.add('paper')
            tr4.value = 0
        } else if (newValue == 1) {
            tr4.classList.add('plastic')
            tr4.value = 1
        } else if (newValue == 2) {
            tr4.classList.add('metal')
            tr4.value = 2
        } else if (newValue == 3) {
            tr4.classList.add('glass')
            tr4.value = 3
        } else if (newValue == 4) {
            tr4.classList.add('rag')
            tr4.value = 4
        } else if (newValue == 5) {
            tr4.classList.add('crumpPaper')
            tr4.value = 5
        } else if (newValue == 6) {
            tr4.classList.add('gBottle')
            tr4.value = 6
        } else {
            alert("Valor não se encaixa. Veja os valores na lista de criações")
        }
    }
}

function returnToSite() {
    if (enStyle == 1) {
        location.href = 'doItYourselfEnUs.html'
    } else {
        location.href = 'cuideVcMsm.html'
    }
}