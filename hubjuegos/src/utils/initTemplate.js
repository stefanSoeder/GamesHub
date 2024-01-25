export const initTemplate = () => {
  const app = document.getElementById("app");

  const header = document.createElement("header");
  const main = docuemt.createElement("main");
  const footer = document.createElement("footer");

  app.append(header, main, footer);
};
