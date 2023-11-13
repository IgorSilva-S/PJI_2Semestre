const Compname = document.getElementById('name');
const email = document.getElementById('mail')
const tel = document.getElementById('telephone')
const local = document.getElementById('address')
const money = document.getElementById('value')
let translatedpage = localStorage.getItem('English')

function donate() {
    if (translatedpage == 0) {
    if (Compname.value != '' && email.value != '' && tel.value != '' && local.value != '' && money.value != '') {
        alert(`Obrigado pela doação de R$${money.value}! O Meio Ambiente agradeçe`)
    } else {
        alert(`Favor, inserir todos os dados`)
    }
    } else if (translatedpage == 1) {
        if (Compname.value != '' && email.value != '' && tel.value != '' && local.value != '' && money.value != '') {
            alert(`Thank you for the $${money.value} donation! The Environment is grateful`)
        } else {
            alert(`Please enter all data`)
        }
}
}

function returnDonationsHall() {
    document.body.removeAttribute('style')
    document.body.style.opacity = '0'; setTimeout(() => {
        location.href = 'doacoes.html'
    }, 300);
}