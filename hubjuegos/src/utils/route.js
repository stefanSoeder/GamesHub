import { getUser } from "../global/state/globalstate";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages";
/// estas paginas se haran en el punto 6 ------> Login, PrintPokemonPage, printTemplateDashboard

//! ----------------------------------------------------------------------------------------------------------------------
//? ------------ CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO------------------------------
//! ----------------------------------------------------------------------------------------------------------------------

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
  }
};
//! --------> lo ponemos sin parametro para que salte al caso de switch de undefined para evaluar el user
/** no le metemos parametro en el initControler para que pueda asi
 * evaluar si tenemos usuario o no en el contexto de estados de nuestra app
 */
