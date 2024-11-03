// Adicione este código no final do index.js
document.getElementById("options").addEventListener("change", changeLanguage);

// document.getElementById("hambmenu").addEventListener("isOpen", openMenu);

function openMenu() {
  const modal = document.getElementById("modal");
  if (modal.classList.contains("open")) {
    modal.classList.remove("open");
    modal.classList.add("closed");
  } else {
    modal.classList.remove("closed");
    modal.classList.add("open");
  }
}

window.onload = function () {
  const lang = window.localStorage.getItem("language") || "pt";
  document.getElementById("options").value = lang;
  changeLanguage();
};

function changeLanguage() {
  const selectElement = document.getElementById("options");
  const lang = selectElement.value;
  window.localStorage.setItem("language", lang);

  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
}

const translations = {
  pt: {
    "nav-link-about": "Sobre",
    "nav-link-skills": "Habilidades",
    "nav-link-projects": "Projetos",
    "nav-link-contact": "Contato",
    "nav-link-back": "Voltar",

    "intro-pre": "Olá, Eu sou",
    "intro-title": "Desenvolvedor Full-stack",
  },
  en: {
    "nav-link-about": "About me",
    "nav-link-skills": "Skills",
    "nav-link-projects": "Projects",
    "nav-link-contact": "Contact",
    "nav-link-back": "Go back",

    "intro-pre": "Hello, I am",
    "intro-title": "Full-stack Developer",
  },
};
