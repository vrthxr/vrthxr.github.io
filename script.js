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
// pegar elemento com o id link1
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
// adicionar evento com o clique
link1.addEventListener("click", () => {
  scrollToElement(".header");
});

link2.addEventListener("click", () => {
  scrollToElement(".aboutme");
});

// Botão de scrollar para o topo aparecendo depois de scrollar certo ponto da página
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// teste abrir botão em outra pagina com jscript
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  window.open("contact.html");
});
