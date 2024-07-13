function addInput() {

 const ul = document.getElementById('inputs')

 const newLi = document.createElement('li')
 newLi.className = 'item'
 newLi.innerText = 'Novo Input: '
 
 const newInput = document.createElement('input')
 newInput.type = 'text'
 newInput.name = 'input'   

 newLi.appendChild(newInput) // Adicionando o input como filho de li
 ul.appendChild(newLi)  // adicionando o li com input dentro da ul

}

// Criando novos elementos no DOM com JavaScript
// 1 . Crirar o elemento com a função createElement
// 2 . Adicionar contéudo a esse elemento
// 3. Adicionar esse elemento como filho de outro