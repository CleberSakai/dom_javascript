function show() {

    // Obter um único elemento a partir do seu ID
    const contactList = document.getElementById('contact-list') // Retorna toda minha lista
    console.log(contactList)

    // Obter vários elementos (HTMLColletion) a partir de um nome de tag
    const liElements = document.getElementsByTagName('li') // Seleciona todas as tags li do meu documento
    console.log(liElements)

    // Obter vários elementos (HTMLColletion) a partir de uma classe
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    // Obter vários elementos (NodeList) a partir do atributo name
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    // Obter vários elementos (NodeList) a partir de uma querry(semelhante aos seletores CSS)
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts) // retorna todos os labels filhos de determinada tag

    // Obter um elemento a partir de uma querry (o primeiro elemento a responder)
    const contact = document.querySelector('#contact-list > li > label')
    console.log(contact) // Para no primeiro label que encontrar, e retorna o objeto em si, não uma NodeList.
}