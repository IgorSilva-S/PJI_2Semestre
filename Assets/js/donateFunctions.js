function linkdoacao() {
    document.body.style.opacity = '0'; setTimeout(() => {
        location.href = 'doacoes2.html'
    }, 300);
}

const Compname = document.getElementById('name');
const email = document.getElementById('mail')
const tel = document.getElementById('telephone')
const local = document.getElementById('address')
const money = document.getElementById('value')

function donate() {
    if (Compname.value != '' && email.value != '' && tel.value != '' && local.value != '' && money.value != '') {
        alert(`Obrigado pela doação de R$${money.value}! O Meio Ambiente agradeçe`)
    } else {
        alert(`Favor, inserir todos os dados`)
    }
}

function returnDonationsHall() {
    document.body.removeAttribute('style')
    document.body.style.opacity = '0'; setTimeout(() => {
        location.href = 'doacoes.html'
    }, 300);
}