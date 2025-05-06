const cover = document.getElementById("cover");
const date = document.getElementById("date");
const dater = document.getElementById("dater");
const time = document.getElementById("time");
const timer = document.getElementById("timer");

const now = new Date();

date.innerHTML = now.toLocaleDateString("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Hora: apenas hora e minuto (ex: "20:23")
time.innerHTML = now.toLocaleTimeString("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
});

dater.innerHTML = now.toLocaleDateString("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

timer.innerHTML = now.toLocaleTimeString("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
});

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
