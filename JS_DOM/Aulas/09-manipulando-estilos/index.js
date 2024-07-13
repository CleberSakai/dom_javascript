function useLightTheme() {
    document.body.style.color = "#212529"
    document.body.style.backgroundColor = "#f1f5f9" 
}

function useDarkTheme() {
    document.body.style.color = "#f1f5f9" 
    document.body.style.backgroundColor = "#212529"
}

function useSwitch() {
    document.body.classList.toggle('is-ligth') // Quando for essa variavel de cor
    document.body.classList.toggle('is-dark') // Remove essa, e vice-versa
}



document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', useSwitch)