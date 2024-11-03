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
    "projects-header": "PROJETOS",
    "item-jotchua-description": "Um bot de Discord.",
    "item-jotchua-disclaimer": "codificado, projetado",
    "item-zeromath-description": "Calcule e encontre o Zero de funções",
    "item-zeromath-disclaimer": "codificado, projetado",
    "item-charvault-description": "Salve seus personagens de RPG.",
    "item-charvault-disclaimer": "codificado, projetado",
    "item-gamesdump-description": "Sua biblioteca de jogos",
    "item-gamesdump-disclaimer": "codificado, projetado",
    "item-spotifried-description": "Ouça milhares de músicas!",
    "item-spotifried-disclaimer": "codificado, projetado",
    "item-redirect": "Saiba mais",
  },
  en: {
    "nav-link-back": "Go Back",
    "projects-header": "PROJECTS",
    "item-jotchua-description": "A Discord bot.",
    "item-jotchua-disclaimer": "codificado, projetado",
    "item-zeromath-description": "Calculate and find the Zero of functions",
    "item-zeromath-disclaimer": "codificado, projetado",
    "item-charvault-description": "Save your RPG characters.",
    "item-charvault-disclaimer": "codificado, projetado",
    "item-gamesdump-description": "Your game library",
    "item-gamesdump-disclaimer": "codificado, projetado",
    "item-spotifried-description": "Listen to thousands of songs!",
    "item-spotifried-disclaimer": "codificado, projetado",
    "item-redirect": "Learn more",
  },
};
