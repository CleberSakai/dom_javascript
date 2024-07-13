const main = document.querySelector('main') // Tag main que abrange todo minha estrutura HTML
const root = document.querySelector(':root') // Elemento root do meu CSS
const input = document.getElementById('input') // Meu input principal onde vai ser inserida as informações
const resultInput = document.getElementById('result') // Input desabilitado, onde somente vai mostrar o resultado das operações

const allowedKeys =  ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] // Caracteres permitidos

// Iterando sobre todos os botões, e depois adicionando o evento de click neles, acrescetando seus valores para o input
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

// Impedir que o usuario digite coisas aleatorias
input.addEventListener('keydown', function (ev) { // (ev) é relacionado ao evento em questão
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) { // saber se a tecla presionada pelo usuario contem no meu array
        input.value += ev.key
        return
    } 
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
})

// Funcionalidade para limpar o input
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus() // Direciona o foco automaticamente para dentro do input
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value) // Atenção e cuidado com o uso do eval() !!!!!
    resultInput.value = result
    resultInput.classList.remove('error')
}

// Mudar o tema da pagina, de claro para escuro e vice-versa
document.getElementById('themeSwitcher').addEventListener('click', function() {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
    const button = ev.currentTarget 
    if(button.innerText === 'Copy') {
        button.innerText = "Copied"
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})
