const menu = document.getElementById("menu");
const burguer = document.getElementById("burguer");
const btnFechar = document.getElementById("btnFechar");
const menuOverlay = document.getElementById("menu-overlay");

// Evento para ABRIR o menu
burguer.addEventListener("click", () => {
  document.body.classList.add("menu-is-active");
  menu.classList.add("ativo");
});

function fecharMenu() {
  document.body.classList.remove("menu-is-active"); // Remove classe do body
  menu.classList.remove("ativo");
}

btnFechar.addEventListener("click", fecharMenu);

menuOverlay.addEventListener("click", fecharMenu);

const counter = document.querySelectorAll(".number");
let jaAnimou = false;

const animarCounter = () => {
  counter.forEach((contador) => {
    const atualizarContagem = () => {
      const alvo = +contador.getAttribute("data-target");
      const contagemAtual = +contador.innerText;

      const incremento = alvo / 100;

      if (contagemAtual < alvo) {
        contador.innerText = Math.ceil(contagemAtual + incremento);
        requestAnimationFrame(atualizarContagem);
      } else {
        contador.innerText = alvo + "+";
      }
    };

    atualizarContagem();
  });
};

const observer = new IntersectionObserver(
  (entradas) => {
    const secao = entradas[0];
    if (secao.isIntersecting && !jaAnimou) {
      animarCounter();
      jaAnimou = true;
    }
  },
  {
    threshold: 0.5,
  },
);

const secaoEstatisticas = document.querySelector(".stats-bar");
if (secaoEstatisticas) {
  observer.observe(secaoEstatisticas);
}
