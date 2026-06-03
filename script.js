let menu = document.getElementById("menu")
let burguer = document.getElementById("burguer")
burguer.addEventListener('click', clickMenu)

function clickMenu() {
    // Alterna a classe 'ativo' no elemento do menu
    menu.classList.toggle('ativo');
    
    // Verifica se a classe 'ativo' está presente para trocar o ícone do botão
    if (menu.classList.contains('ativo')) {
        burguer.innerHTML = '<i class="fa-solid fa-x" aria-hidden="true"></i>';
    } else {
        burguer.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}