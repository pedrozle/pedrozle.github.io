// Adicione este código no final do index.js
document.getElementById("options").addEventListener("change", changeLanguage);

function changeLanguage() {
  console.log("Changing language");
  const selectElement = document.getElementById("options");
  const lang = selectElement.value;
  const link = document.getElementById("link_curriculo");
  //   if (lang === "pt-br") {
  //     link.href = "docs/Curriculo - Joao - PT.pdf";
  //   } else {
  //     link.href = "docs/Curriculo - Joao - en.pdf";
  //   }

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

const translations = {
  pt: {
    "nav-link-about": "Sobre",
    "nav-link-skills": "Habilidades",
    "nav-link-portifolio": "Portifólio",
    "nav-link-contact": "Contato",

    "intro-pre": "Olá, Eu sou",
    "intro-title": "Desenvolvedor Full-stack",
  },
  en: {
    "nav-link-about": "About me",
    "nav-link-skills": "Skills",
    "nav-link-portifolio": "Portifolio",
    "nav-link-contact": "Contact",

    "intro-pre": "Hello, I am",
    "intro-title": "Full-stack Developer",
  },
};
