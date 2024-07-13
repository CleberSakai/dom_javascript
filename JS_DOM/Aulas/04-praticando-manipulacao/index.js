function addContact() {
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Contato"

    const ul = document.createElement('ul') // Iniciando a lista não ordenada

    // O primeiro item da lista é um input do tipo texto
    const nameLi = document.createElement('li') // adicionando o primeiro item da lista
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = "text"
    nameInput.name = "fullName"
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    // Segundo elemento da lista, input do tipo numero de telefone
    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = "tel"
    phoneInput.name = "phoneNumber"
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    // Terceiro elemento da lista, input para o endereço
    const adressLi = document.createElement('li')
    adressLi.innerText = "Endereço: "
    const adressInput = document.createElement('input')
    adressInput.type = "text"
    adressInput.name = "adress"
    adressLi.appendChild(adressInput)
    ul.appendChild(adressLi)
    ul.appendChild(document.createElement('br'))


    contactSection.append(h3, ul)

 }

function removeContact() {
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}


