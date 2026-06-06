const menu = document.getElementById("menu");
const burguer = document.getElementById("burguer");
const btnFechar = document.getElementById("btnFechar");
const menuOverlay = document.getElementById("menu-overlay");

// Evento para ABRIR o menu
burguer.addEventListener('click', () => {
    document.body.classList.add('menu-is-active');
    menu.classList.add('ativo');
});

function fecharMenu() {
    document.body.classList.remove('menu-is-active'); // Remove classe do body
    menu.classList.remove('ativo');
}

btnFechar.addEventListener('click', fecharMenu);

// UX extra: Fecha o menu se o usuário clicar na área borrada (overlay)
menuOverlay.addEventListener('click', fecharMenu);