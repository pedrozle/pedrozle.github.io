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
  const link = document.getElementById("link_curriculo");

  if (lang === "pt-br") {
    link.href = "docs/Curriculo - Joao - PT.pdf";
  } else {
    link.href = "docs/Curriculo - Joao - en.pdf";
  }

  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });

  const elementsArray = Array.from(elements);

  const res_desc = elementsArray.find(
    (el) => el.getAttribute("data-translate") === "resume_description"
  );
  const res_desc_link = elementsArray.find(
    (el) => el.getAttribute("data-translate") === "resume_description_link"
  );

  res_desc.innerHTML = translations[lang]["resume_description"];
  res_desc_link.innerHTML = translations[lang]["resume_description_link"];

  res_desc.appendChild(res_desc_link);
}

function enviaEmail() {
  const name = encodeURIComponent(document.getElementById("name").value);
  const email = "pedrozle@outlook.com";
  const subject = encodeURIComponent(document.getElementById("subject").value);
  const message = encodeURIComponent(document.getElementById("message").value);

  const mailtoLink = `mailto:${email}?subject=${subject}&body=Olá, meu nome é ${name}%0A${message}`;

  window.location.href = mailtoLink;
}
