function scrollToElement(elementSelector, instance = 0) {
  // Um dos meus primeiros projetos utilizando JavaScript, provavelmente o código não vai estar perfeito.
  // Selecionar todos os elementos que combinam com o que o seletor propôs.
  const elements = document.querySelectorAll(elementSelector);
  // Checar se tem algum elememento que combine e se a instância requisitada existe.
  if (elements.length > instance) {
    // Scrollar até o elemento selecionado
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");

link1.addEventListener("click", () => {
  scrollToElement(".header");
});

// Botão de scrollar para o topo
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
