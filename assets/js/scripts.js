import { translations } from "./translations.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.getElementsByClassName("btn-lang");
  for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    const lang = button.id;
    button.addEventListener("click", () => {
      changeLanguage(lang);
    });
  }
});

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
}

function enviaEmail() {
  const name = encodeURIComponent(document.getElementById("name").value);
  const email = "pedrozle@outlook.com";
  const subject = encodeURIComponent(document.getElementById("subject").value);
  const message = encodeURIComponent(document.getElementById("message").value);

  const mailtoLink = `mailto:${email}?subject=${subject}&body=Olá, meu nome é ${name}%0A${message}`;

  window.location.href = mailtoLink;
}
