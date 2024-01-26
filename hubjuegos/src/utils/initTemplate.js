import { PrintTemplateHeader, PrintTemplateFooter } from "../components";
export const initTemplate = () => {
  /**Definición de la función */
  const app = document.getElementById("app"); //**Para indicar al app que nos referimos al elemento "app" */
  console.log("🚀 ~ initTemplate ~ app:", app);
  const header = document.createElement("header"); //**Creamos los elementos HTML */
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  app.append(header, main, footer); //*Utilizamos el método .append para inyectar los elementos dentro de "app"
  PrintTemplateHeader();
  PrintTemplateFooter();
};
