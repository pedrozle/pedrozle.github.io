let curLanguage = "";

window.onload = function () {
  const lang = window.localStorage.getItem("language") || "pt";
  document.getElementById("options").value = lang;
  changeLanguage();
};

function changeLanguage() {
  const selectElement = document.getElementById("options");

  const lang = selectElement.value;
  window.localStorage.setItem("language", lang);
  curLanguage = lang;

  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
  getTime();
}

function getTime() {
  const date = document.getElementById("date");
  const dater = document.getElementById("dater");
  const time = document.getElementById("time");
  const timer = document.getElementById("timer");

  const now = new Date();

  const locale = curLanguage == "pt" ? "pt-BR" : "en-US";
  console.log(curLanguage, locale);

  date.innerHTML = now.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Hora: apenas hora e minuto (ex: "20:23")
  time.innerHTML = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });

  dater.innerHTML = now.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  timer.innerHTML = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const cover = document.getElementById("cover");
cover.addEventListener("click", unlock);

function unlock() {
  cover.style.transform = "translateY(-100%)";

  cover.addEventListener(
    "transitionend",
    () => {
      cover.style.display = "none"; // Remove a camada do cover após o efeito
    },
    { once: true }
  );
}

function lock() {
  console.log("Clickou");
  cover.style.display = "block";
  cover.style.transform = "translateY(0)";
}

const translations = {
  pt: {
    "unlock-text": "Clique para desbloquear",
    "header-cur-page": "Portfólio de Pedrozle",
    "header-link1": "currículo",
    "header-link2": "projetos",
    "header-lang-pt": "português",
    "header-lang-en": "inglês",
    "profile-subtitle": "Desenvolvedor & Cientista de Dados",
    "profile-motto":
      '"ser pessimista dá menos trabalho, e também é uma forma de autopreservação" - José Carlos, 2023',
    "about-title": "Sobre",
    "about-subtitle": "Desenvolvedor & Cientista de Dados",
    "about-self-title":
      "Bacharel em Ciência da Computação, Desenvolvedor Full-stack",
    "education-title": "Formação Acadêmica",
    "education-elem-1":
      "Ciência da Computação - Universidade Federal de Rondônia",
    "education-elem-2": "Ciência de Dados - Faculdade Focus",
    "about-motto":
      "Apaixonado por jogos e modelagem, procuro me manter atualizado com todos os últimos avanços no mundo do desenvolvimento de jogos.",
    "skills-title": "Habilidades",
    "projects-title": "Projetos",
    "btn-know-more": "Saiba mais",
    "contact-title": "Contato",
    "documents-title": "Documentos",
    "btn-download-curriculum": "Baixar currículo",
  },
  en: {
    "unlock-text": "Click to unlock",
    "header-cur-page": "Pedrozle's Portifolio",
    "header-link1": "curriculum",
    "header-link2": "projects",
    "header-lang-pt": "portuguese",
    "header-lang-en": "english",
    "profile-subtitle": "Developer & Data Scientist",
    "profile-motto":
      '"being pessimistic is less work, and it is also a way of self-preservation" - José Carlos, 2023',
    "about-title": "About",
    "about-subtitle": "Developer & Data Scientist",
    "about-self-title": "Bachelor of Computer Science, Full-stack developer",
    "education-title": "Academic Background",
    "education-elem-1": "Computer Science - Federal University of Rondônia",
    "education-elem-2": "Data Science - Focus College",
    "about-motto":
      "Passionate about games and modeling, I try to stay up to date with all the latest developments in the world of game development.",
    "skills-title": "Skills",
    "projects-title": "Projects",
    "btn-know-more": "Learn more",
    "contact-title": "Contact",
    "documents-title": "Documents",
    "btn-download-curriculum": "Download curriculum",
  },
};
