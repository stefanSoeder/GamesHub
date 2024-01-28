import "./Footer.css"; //**Importamos del CSS */
const template = () =>
  //**Definimos un función llamada Template que devuelve una cada de texto que es un HTML/ */
  `
<h3><span/h3>Winter is Coming ❄️ to</span> Neoland</h3>
`;
export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template(); //**Inyectamos la función al footer a través del DOM */
};
