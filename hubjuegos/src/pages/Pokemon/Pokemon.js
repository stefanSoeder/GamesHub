import "./Pokemon.css"; //*template para html//
const template = () => `  
  <div id="pokemon">
    <div id="containerFilter">
      <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input
        type="text"
        id="inputPokemon"
        placeholder="Busca tu pokemon favorito"
      />
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;
const dataService = async () => {}; //**función que taae los datos del contexto */
const addListeners = () => {}; //**  eventos para el input */
export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
}; /**  exporta y pinta la página*/
