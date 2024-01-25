import "./Header.css"; /**Para importar el CSS del Header */

const template = () =>
  //**Define una función llamada template que devuelve txt que representa un fragmento de  HTML con imagenes y un contenedor de navegación*/
  `
  <img
    src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679162/header_giqdug.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
  `;
const addListeners = () => {}; //**PAra añadir eventos */
export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
}; //**inyecta el HTML generado por TEMPLATE en el Header del DOM y llama a addlisteners (eventos)*/
