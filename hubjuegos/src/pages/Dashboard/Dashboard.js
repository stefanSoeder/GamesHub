// Dashboard.js -----> src/pages/Dashboard/Dashboard.js
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateWackaTopo">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761641/pngwing.com_1_iq8zfk.png"
            alt=" go to wacka topo game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateQuiz">
          <img
            src="https://res.cloudinary.com/dhu1it9x8/image/upload/v1706558125/libros-de-texto_nuzhc0.png"
            alt="go to fantasy quiz game"
          />
          <h2>FANTASY QUIZ</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateWackaTopo = document.getElementById("navigateWackaTopo");
  navigateWackaTopo.addEventListener("click", () => {
    initControler("Topo");
  });
  const navigateQuiz = document.getElementById("navigateQuiz");
  navigateQuiz.addEventListener("click", () => {
    initControler("Quiz");
  });
};

export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();

  /** y por ultimo traemos la info que hace la llamada asincrona a la api de pokemon y lo setea en el estado
   */
  //--------------------------------------------- LO NUEVO -------------------------
  getInfo();
  //---------------------------------------------------------------------------------
};
