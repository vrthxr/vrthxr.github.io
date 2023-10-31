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

// abrir e-mail de contato/fechar e-mail de contato colocando e removendo a classe hidden
function openContact() {
  document.getElementById("contact").classList.remove("hidden");
}

function closeContact() {
  document.getElementById("contact").classList.add("hidden");
}

// função de enviar o e-mail
function sendEmail() {
  Email.send({
    SecureToken: "dee6301f-7211-44cd-9b84-b18eea240456",
    To: "constancio_arthur@yahoo.com",
    From: document.getElementById("email").value,
    Subject: "E-mail from vrthxr.github.io",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent! <3"));
}
