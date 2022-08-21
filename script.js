let number = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
const mudarNumero = document.querySelector(".mudarNumero");
const acertou = document.querySelector(".acertou");
const receber = document.querySelector(".receber");
const input = document.querySelectorAll(".number");
const btn = document.querySelector(".submit");
const dica = document.querySelector(".dica");
const quiz = document.querySelector(".quiz");
const tudo = document.querySelector(".tudo")
const error = document.querySelector(".error")

receber.addEventListener("click", () => {
  acertou.classList.remove("hidden");
  quiz.classList.add("hidden");
  number = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  input[0].placeholder = "Entre 0 e 1000";
});

mudarNumero.addEventListener("click", () => {
  number = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  input[0].value = "";
  input[0].placeholder = "Entre 0 e 100";
});

btn.addEventListener("click", motor);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    motor();
  }
});

function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

async function motor() {
  const userInput = +input[0].value;
  if (userInput === number && userInput === 404) {
    error.classList.add("fadeE")
    error.classList.remove("hidden")
    tudo.classList.add("hidden")
    await delay(5);
    error.classList.add("hidden")
    acertou.classList.add("fadeIn");
    acertou.classList.remove("hidden");
    quiz.classList.add("hidden");
    error.classList.remove("fadeE")
    tudo.classList.remove("hidden")
  } else if (userInput === number) {
    acertou.classList.add("fadeIn");
    acertou.classList.remove("hidden");
    quiz.classList.add("hidden");
  } else if (userInput > number) {
    dica.classList.add("fade");
    dica.innerHTML = "O seu numero e maior.";
    await delay(1.9);
    dica.innerHTML = "";
    await delay(0.1);
    dica.classList.remove("fade");
  } else {
    dica.classList.add("fade");
    dica.innerHTML = "O seu numero e menor.";
    await delay(1.9);
    dica.innerHTML = "";
    await delay(0.1);
    dica.classList.remove("fade");
  }
}
