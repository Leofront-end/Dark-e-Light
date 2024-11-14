let trilho = document.getElementById("trilho")
let body = document.querySelector('body')
let titulo = document.querySelector('h1')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

    titulo.classList.toggle('dark')
    if (titulo.classList == 'dark') {
        titulo.textContent = 'Dark mode'
    } else {
        titulo.textContent = 'Light mode'
    }
})