let g1open = false

function openg1() {
    if (!g1open) {
        document.getElementById('g1').style.height = '250px'
        g1open = true
    } else {
        document.getElementById('g1').removeAttribute('style')
        g1open = false
    }
}