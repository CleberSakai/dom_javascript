const input = document.getElementById('input')

// Vamos começar alterando o valor do input
document.getElementById('value').addEventListener('click', function(){
    input.value = 'Olá Mundo'
})

// Vamos alterar o tipo de input, para radio
document.getElementById('type').addEventListener('click', function(){
    input.setAttribute('type', 'radio')
})

// podemos manipular atributos comuns, como o placeholder
document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digita algo...'
})

// e também atributos booleanos, como o disabled
document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

// Por fim, podemos usar o poder dos atributos de dados do HTML dentro do JS, para
// aumentar ainda mais as nossas possibilidades:

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse // data-something-else assim fica no html, porém o JS converte para o camel-case data.somenthinElse
    console.log("O valor do atributo data-something-else é: " + data )
    input.dataset.somethingElse = "Algum outro valor"
    console.log("O valor agora mudou: " + input.dataset.somethingElse)
})