// src/index.js
import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.querySelector("#content");

// liga o nome do data-tab com a função de cada aba
const tabs = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

// limpa o #content e carrega a aba escolhida
function showTab(name) {
  content.textContent = "";
  tabs[name]();
}

// um ouvinte de clique para cada botão do menu
document.querySelectorAll("nav button").forEach((button) => {
  button.addEventListener("click", () => {
    showTab(button.dataset.tab);
  });
});

// ao abrir o site, mostra a aba Início
showTab("home");
