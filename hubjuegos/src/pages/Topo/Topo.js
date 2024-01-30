import {
  setIntervalTopo,
  setIntervalTopoTimer,
} from "../../global/state/globalState";
import "./Topo.css";

const mole = document.querySelector(".mole");

let result = 0;
let hitPosition;
let currentTime = 15;
let timerId = null;
let countDownTimerId;
const template = () => `
  <div id="Topo">
  <h1 id="titulo">WHACK A MOLE</h1>
    <div class="components">
      <h2 id="yourscore">Your score:</h2>
      <h2 id="score">0</h2>  

      <h2 id="time">Time Left:</h2>
      <h2 id="time-left">15</h2>
   </div>
  <div class="grid">
    <div class="square" id="1"></div>
    <div class="square" id="2"></div>
    <div class="square" id="3"></div>
    <div class="square mole" id="4"></div>
    <div class="square" id="5"></div>
    <div class="square" id="6"></div>
    <div class="square" id="7"></div>
    <div class="square" id="8"></div>
    <div class="square" id="9"></div>
  </div>
  </div>
`;

const randomSquare = () => {
  //*trae los cuadrados del CSS*/
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  const randomNumber = Math.floor(Math.random() * 9); //*Esto genera un número aleatorio entre 0 y 8 (inclusive) utilizando Math.random() y lo multiplica por 9 para obtener un número entre 0 y 8. Math.floor() se utiliza para redondear hacia abajo el resultado, asegurando así que el número resultante sea un número entero entre 0 y 8./

  console.log(randomNumber);

  let randomSquare = squares[randomNumber]; //*selecciona un elemento aleatorio de la lista squares utilizando el número aleatorio generado como índice. El cuadrado seleccionado aleatoriamente se almacena en la variable randomSquare.*/
  randomSquare.classList.add("mole"); //*Añade la clase CSS "mole" al cuadrado seleccionado aleatoriamente, marcándolo como el cuadrado activo en el juego.*/

  hitPosition = randomSquare.id; //*signa el ID del cuadrado seleccionado aleatoriamente a una variable llamada hitPosition*/
};

const addEventListener = () => {
  //*añade un botón a cada cuadrado y verifica si coincide con  "hitPosition"
  const squares = document.querySelectorAll(".square");
  const score = document.getElementById("score");
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      if (square.id == hitPosition) {
        result++;
        score.textContent = result;
        hitPosition = null;
      }
    });
  });
};

const moveMole = () => {
  //*llama a la función moveMole cada 500ms*/
  timerId = setInterval(randomSquare, 500);
  setIntervalTopo(timerId);
};

const countDown = (countDownTimerId) => {
  //*función para realizar una cuenta atrás del tiempo establecido en currentTime
  currentTime--;
  const timeLeft = document.getElementById("time-left");
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your score is: " + result);
    resetGame();
  }
};

const resetGame = () => {
  currentTime = 30; // Reinicia el tiempo
  result = 0; // Reinicia el puntaje
  hitPosition = null; // Reinicia la posición del topo
  printTopoPage(); // Vuelve a imprimir la página del juego
};

export const printTopoPage = () => {
  currentTime = 15;
  result = 0;
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex";
  moveMole();
  addEventListener();
  countDownTimerId = setInterval(countDown, 1500);

  setIntervalTopoTimer(countDownTimerId);
  console.log("topo cargado");
};
