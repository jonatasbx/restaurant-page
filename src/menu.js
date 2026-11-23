// src/menu.js
import baiao from "./images/baiao.jpg";
import carneDeSol from "./images/carne-de-sol.jpg";
import escondidinho from "./images/escondidinho.jpg";
import moqueca from "./images/moqueca.jpg";
import acaraje from "./images/acaraje.jpg";
import cartola from "./images/cartola.jpg";

// DADOS: um objeto por prato
const pratos = [
  {
    nome: "Baião de dois",
    descricao: "Arroz, feijão-verde, queijo coalho e nata",
    preco: 42,
    imagem: baiao,
  },
  {
    nome: "Carne de sol com macaxeira",
    descricao: "Carne de sol na manteiga de garrafa",
    preco: 58,
    imagem: carneDeSol,
  },
  {
    nome: "Escondidinho de charque",
    descricao: "Purê de macaxeira gratinado",
    preco: 45,
    imagem: escondidinho,
  },
  {
    nome: "Moqueca baiana",
    descricao: "Peixe no dendê com leite de coco",
    preco: 68,
    imagem: moqueca,
  },
  {
    nome: "Acarajé",
    descricao: "Com vatapá, caruru e camarão seco",
    preco: 22,
    imagem: acaraje,
  },
  {
    nome: "Cartola",
    descricao: "Banana, queijo coalho, açúcar e canela",
    preco: 20,
    imagem: cartola,
  },
];

// transforma 42 em "R$ 42,00"
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// MONTAGEM: cria um card a partir de um prato
function criarCard(prato) {
  const card = document.createElement("article");
  card.classList.add("card");

  const foto = document.createElement("img");
  foto.src = prato.imagem;
  foto.alt = prato.nome;

  const nome = document.createElement("h2");
  nome.textContent = prato.nome;

  const descricao = document.createElement("p");
  descricao.textContent = prato.descricao;

  const preco = document.createElement("p");
  preco.classList.add("preco");
  preco.textContent = formatarPreco(prato.preco);

  card.appendChild(foto);
  card.appendChild(nome);
  card.appendChild(descricao);
  card.appendChild(preco);

  return card;
}

// função exportada: monta a página do cardápio no #content
export default function loadMenu() {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const titulo = document.createElement("h1");
  titulo.textContent = "Cardápio";

  const grade = document.createElement("div");
  grade.classList.add("menu-grid");

  pratos.forEach((prato) => {
    grade.appendChild(criarCard(prato));
  });

  menu.appendChild(titulo);
  menu.appendChild(grade);
  content.appendChild(menu);
}
