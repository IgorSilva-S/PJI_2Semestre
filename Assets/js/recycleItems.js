const tr1 = document.getElementById('tr1')
const tr2 = document.getElementById('tr2')
const tr3 = document.getElementById('tr3')
const tr4 = document.getElementById('tr4')
let s1fill = false
let s2fill = false
let s3fill = false
let s4fill = false
/*Tipo de lixo - definição:
0 - Papel ou não definido;
1 - Plastico;
2 - Metal;
3 - Vidro*/

tr1.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 4)
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
    }
})

tr2.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 4)
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
    }
})

tr3.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 4)
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
    }
})

tr4.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 4)
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
    }
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
        } else if (tr1.value == 1) {
            slot0.classList.add('plastic')
            s1fill = true
        } else if (tr1.value == 2) {
            slot0.classList.add('metal')
            s1fill = true
        } else if (tr1.value == 3) {
            slot0.classList.add('glass')
            s1fill = true
        }
    } else if (s2fill == false) {
        slot1.className = 'slot'
        if (tr1.value == 0) {
            slot1.classList.add('paper')
            s2fill = true
        } else if (tr1.value == 1) {
            slot1.classList.add('plastic')
            s2fill = true
        } else if (tr1.value == 2) {
            slot1.classList.add('metal')
            s2fill = true
        } else if (tr1.value == 3) {
            slot1.classList.add('glass')
            s2fill = true
        }
    } else if (s3fill == false) {
        slot2.className = 'slot'
        if (tr1.value == 0) {
            slot2.classList.add('paper')
            s3fill = true
        } else if (tr1.value == 1) {
            slot2.classList.add('plastic')
            s3fill = true
        } else if (tr1.value == 2) {
            slot2.classList.add('metal')
            s3fill = true
        } else if (tr1.value == 3) {
            slot2.classList.add('glass')
            s3fill = true
        }
    } else if (s4fill == false) {
        slot3.className = 'slot'
        if (tr1.value == 0) {
            slot3.classList.add('paper')
            s4fill = true
        } else if (tr1.value == 1) {
            slot3.classList.add('plastic')
            s4fill = true
        } else if (tr1.value == 2) {
            slot3.classList.add('metal')
            s4fill = true
        } else if (tr1.value == 3) {
            slot3.classList.add('glass')
            s4fill = true
        }
    }
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
        } else if (tr2.value == 1) {
            slot0.classList.add('plastic')
            s1fill = true
        } else if (tr2.value == 2) {
            slot0.classList.add('metal')
            s1fill = true
        } else if (tr2.value == 3) {
            slot0.classList.add('glass')
            s1fill = true
        }
    } else if (s2fill == false) {
        slot1.className = 'slot'
        if (tr2.value == 0) {
            slot1.classList.add('paper')
            s2fill = true
        } else if (tr2.value == 1) {
            slot1.classList.add('plastic')
            s2fill = true
        } else if (tr2.value == 2) {
            slot1.classList.add('metal')
            s2fill = true
        } else if (tr2.value == 3) {
            slot1.classList.add('glass')
            s2fill = true
        }
    } else if (s3fill == false) {
        slot2.className = 'slot'
        if (tr2.value == 0) {
            slot2.classList.add('paper')
            s3fill = true
        } else if (tr2.value == 1) {
            slot2.classList.add('plastic')
            s3fill = true
        } else if (tr2.value == 2) {
            slot2.classList.add('metal')
            s3fill = true
        } else if (tr2.value == 3) {
            slot2.classList.add('glass')
            s3fill = true
        }
    } else if (s4fill == false) {
        slot3.className = 'slot'
        if (tr2.value == 0) {
            slot3.classList.add('paper')
            s4fill = true
        } else if (tr2.value == 1) {
            slot3.classList.add('plastic')
            s4fill = true
        } else if (tr2.value == 2) {
            slot3.classList.add('metal')
            s4fill = true
        } else if (tr2.value == 3) {
            slot3.classList.add('glass')
            s4fill = true
        }
    }
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
        } else if (tr3.value == 1) {
            slot0.classList.add('plastic')
            s1fill = true
        } else if (tr3.value == 2) {
            slot0.classList.add('metal')
            s1fill = true
        } else if (tr3.value == 3) {
            slot0.classList.add('glass')
            s1fill = true
        }
    } else if (s2fill == false) {
        slot1.className = 'slot'
        if (tr3.value == 0) {
            slot1.classList.add('paper')
            s2fill = true
        } else if (tr3.value == 1) {
            slot1.classList.add('plastic')
            s2fill = true
        } else if (tr3.value == 2) {
            slot1.classList.add('metal')
            s2fill = true
        } else if (tr3.value == 3) {
            slot1.classList.add('glass')
            s2fill = true
        }
    } else if (s3fill == false) {
        slot2.className = 'slot'
        if (tr3.value == 0) {
            slot2.classList.add('paper')
            s3fill = true
        } else if (tr3.value == 1) {
            slot2.classList.add('plastic')
            s3fill = true
        } else if (tr3.value == 2) {
            slot2.classList.add('metal')
            s3fill = true
        } else if (tr3.value == 3) {
            slot2.classList.add('glass')
            s3fill = true
        }
    } else if (s4fill == false) {
        slot3.className = 'slot'
        if (tr3.value == 0) {
            slot3.classList.add('paper')
            s4fill = true
        } else if (tr3.value == 1) {
            slot3.classList.add('plastic')
            s4fill = true
        } else if (tr3.value == 2) {
            slot3.classList.add('metal')
            s4fill = true
        } else if (tr3.value == 3) {
            slot3.classList.add('glass')
            s4fill = true
        }
    }
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
        } else if (tr4.value == 1) {
            slot0.classList.add('plastic')
            s1fill = true
        } else if (tr4.value == 2) {
            slot0.classList.add('metal')
            s1fill = true
        } else if (tr4.value == 3) {
            slot0.classList.add('glass')
            s1fill = true
        }
    } else if (s2fill == false) {
        slot1.className = 'slot'
        if (tr4.value == 0) {
            slot1.classList.add('paper')
            s2fill = true
        } else if (tr4.value == 1) {
            slot1.classList.add('plastic')
            s2fill = true
        } else if (tr4.value == 2) {
            slot1.classList.add('metal')
            s2fill = true
        } else if (tr4.value == 3) {
            slot1.classList.add('glass')
            s2fill = true
        }
    } else if (s3fill == false) {
        slot2.className = 'slot'
        if (tr4.value == 0) {
            slot2.classList.add('paper')
            s3fill = true
        } else if (tr4.value == 1) {
            slot2.classList.add('plastic')
            s3fill = true
        } else if (tr4.value == 2) {
            slot2.classList.add('metal')
            s3fill = true
        } else if (tr4.value == 3) {
            slot2.classList.add('glass')
            s3fill = true
        }
    } else if (s4fill == false) {
        slot3.className = 'slot'
        if (tr4.value == 0) {
            slot3.classList.add('paper')
            s4fill = true
        } else if (tr4.value == 1) {
            slot3.classList.add('plastic')
            s4fill = true
        } else if (tr4.value == 2) {
            slot3.classList.add('metal')
            s4fill = true
        } else if (tr4.value == 3) {
            slot3.classList.add('glass')
            s4fill = true
        }
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

function opencloseControls() {
    let controls = document.querySelector('.controls')
    controls.classList.toggle('opened')
}
