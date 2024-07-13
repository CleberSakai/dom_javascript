function register(ev) {
    const sectionElement = ev.currentTarget.parentNode
    const userName = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation) {
        alert("O usuario" + userName + " foi cadastrado")
    } else {
        alert("As senhas não são iguais, tente novamente")
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register) // primeiro parametro é o evento que desejo acionar, o segundo é o que ele vai fazer ao ser acionado.

// Posso adicionar mais de um evento para o mesmo elemento

// Removendo evento do elemento
function removeEvent() {
    button.removeEventListener('click', register)
    alert("O evento foi removido do botão")
}

button.addEventListener('mouseover', function(ev){
    console.log(ev.currentTarget) // Alvo atual, achei muito parecido com o this
})