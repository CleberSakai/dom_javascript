// Usando o sessionStorage
document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function(){
    const info= sessionStorage.getItem('info')
    alert('A informação guardada é ' + info)
})

// Usando o localStorage
document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('texto', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const text= localStorage.getItem('texto')
    alert('A informação guardada é ' + text)
})

// Usando cookies 
document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024, 10, 11) + ';'
    const path = 'path=/;'

    document.cookie = cookie + expiration + path
    input.value=''
    console.log(document.cookie)
    
})