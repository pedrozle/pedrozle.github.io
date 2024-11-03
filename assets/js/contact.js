document.getElementById("back-button").addEventListener("click", function () {
  // Redireciona para a página inicial
  window.location.href = "/";
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    // Cancela o envio do formulário
    event.preventDefault();

    const name = encodeURIComponent(document.getElementById("name").value);
    const email = "pedrozle@outlook.com";
    const message = encodeURIComponent(
      document.getElementById("message").value
    );

    const mailtoLink = `mailto:${email}?subject=Oportunidade de Emprego&body=Olá, meu nome é ${name}%0A${message}`;

    window.location.href = mailtoLink;
  });

var lang = "pt";
window.onload = function () {
  lang = window.localStorage.getItem("language") || "pt";
  changeLanguage();
};

function changeLanguage() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });

  var inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.setAttribute("placeholder", translations[lang][`input-${input.name}`]);
  });

  document.querySelector("textarea").setAttribute("placeholder", translations[lang]['textarea'])
  

}

const translations = {
  pt: {
    "nav-link-back": "Voltar",
    "contact-header": "CONTATO",
    "contact-motto": "Tem alguma vaga? Me envie um email que eu te respondo o mais breve possível",
    "input-name": "Digite seu nome",
    "input-email": "Digite seu email",
    "input-phone": "Número de celular",
    "textarea": "Escreva aqui a sua mensagem",
    "form-button": "Entrar em contato",
  },
  en: {
    "nav-link-back": "Go Back",
    "contact-header": "CONTACT",
    "contact-motto": "Do you have any positions? Send me an email and I will respond as soon as possible.",
    "input-name": "Enter your name",
    "input-email": "Enter your email",
    "input-phone": "Enter your phone number",
    "textarea": "Write here your message",
    "form-button": "Contact",
  },
};
