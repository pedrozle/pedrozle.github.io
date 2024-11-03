// Adicione este código no final do index.js
var lang = "pt";
window.onload = function () {
  lang = window.localStorage.getItem("language") || "pt";
  changeLanguage();
};

function changeLanguage() {
  const link = document.getElementById("link_curriculo");
  if (lang === "pt") {
    link.href = "./../docs/Curriculo - Joao - PT.pdf";
  } else {
    link.href = "./../docs/Curriculo - Joao - en.pdf";
  }

  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
}

const translations = {
  pt: {
    "nav-link-back": "Voltar",
    "about-header": "SOBRE MIM",
    "about-title": "Desenvolvedor, Designer e Fotógrafo amador",
    "about-download-link": "Baixar currículo",
    "about-description": `
      João Pedro, 25, Bacharel em Ciência da Computação, desenvolvedor
      Full-stack <br /><br />

      Apaixonado por jogos e por modelagens, procuro estar antenado em
      todas as novidades no mundo do desenvolvimento de jogos.
    `,
    "about-motto": `
      "ser pessimista dá menos trabalho, e também é uma maneira de
      autopreservação" - José Carlos, 2023
    `,
    "about-education-title": "Formação",
    "about-education-formation": "Ciência da Computação",
    "about-education-college": "Universidade Federal de Rondônia",
  },
  en: {
    "nav-link-back": "Go Back",
    "about-header": "ABOUT ME",
    "about-title": "Developer, Designer & Amateur Photographer",
    "about-download-link": "Download CV",
    "about-description": `
      João Pedro, 25, Computer Science Bachelor, Full-Stack developer <br /><br />

      Passionate about games and modeling, I try to stay up to date with
      all the latest developments in the world of game development.
    `,
    "about-motto": `
      "being pessimistic is less work, and it is also a way of
self-preservation" - José Carlos, 2023
    `,
    "about-education-title": "Formation",
    "about-education-formation": "Computer Science",
    "about-education-college": "Federal University of Rondônia",
  },
};
