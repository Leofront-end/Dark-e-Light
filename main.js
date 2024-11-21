let trilho = document.getElementById("trilho")
let body = document.querySelector('body')
let titulo = document.querySelector('h1')
let texto = document.querySelector('p')
let imagem = document.querySelector('img.lado')
let logo = document.querySelector('img.logo')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

    titulo.classList.toggle('dark')
    if (titulo.classList == 'dark') {
        titulo.textContent = 'Dark mode'
        texto.textContent = 'O Dark Mode é um tema visual com fundo escuro e texto claro, ideal para ambientes com pouca luz. Ele reduz o cansaço visual, economiza energia em telas OLED e oferece uma estética moderna e elegante para aplicativos e sites.'
        imagem.src = "img/Lua.png"
        logo.src = "img/Lua.png"
    } else {
        titulo.textContent = 'Light mode'
        texto.textContent = 'O light mode é um tema visual com fundo claro e texto escuro, projetado para ambientes bem iluminados. Ele facilita a leitura ao destacar o conteúdo e é popular por transmitir uma aparência limpa e leve em aplicativos e sites.'
        imagem.src = "img/Sol.png"
        logo.src = "img/Sol.png"
    }
})