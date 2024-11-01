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
