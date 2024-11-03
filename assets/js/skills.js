// Adicione este código no final do index.js
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
}

const translations = {
  pt: {
    "nav-link-back": "Voltar",
    "skills-header": "HABILIDADES",
    "skills-content-header-tecnologies": "Utilizo:",
    "skills-content-header-languages": "Idiomas:",
    "skill-item-header-pt": "Português",
    "skill-item-header-en": "Inglês",
    "skill-item-header-es": "Espanhol"
    
  },
  en: {
    "nav-link-back": "Go Back",
    "skills-header": "SKILLS",
    "skills-content-header-tecnologies": "Using now:",
    "skills-content-header-languages": "Languages:",
    "skill-item-header-pt": "Portuguese",
    "skill-item-header-en": "English",
    "skill-item-header-es": "Spanish"
  },
};
