import {
  setIntervalTopo,
  setIntervalTopoTimer,
} from "../../global/state/globalState";
import "./Topo.css";

const mole = document.querySelector(".mole");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimerId;
const template = () => `
  <div id="Topo">
  <h1 id="titulo">WHAC A MOLE</h1>
    <div class="components">
      <h2 id="yourscore">Your score:</h2>
      <h2 id="score">0</h2>

      <h2 id="time">Time Left:</h2>
      <h2 id="time-left">60</h2>
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
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  const randomNumber = Math.floor(Math.random() * 9);

  console.log(randomNumber);

  let randomSquare = squares[randomNumber];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
};

const addEventListener = () => {
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
  timerId = setInterval(randomSquare, 500);
  setIntervalTopo(timerId);
};

const countDown = (countDownTimerId) => {
  currentTime--;
  const timeLeft = document.getElementById("time-left");
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your score is: " + result);
    PintarTopo();
  }
};

export const printTopoPage = () => {
  currentTime = 60;
  result = 0;
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex";
  moveMole();
  addEventListener();
  countDownTimerId = setInterval(countDown, 1000);

  setIntervalTopoTimer(countDownTimerId);
  console.log("topo cargado");
};
