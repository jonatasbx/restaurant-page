// src/home.js
import homeImage from "./images/home.jpg";

export default function loadHome() {
  const content = document.querySelector("#content");

  // a "página" Home (o <div class="home">)
  const home = document.createElement("div");
  home.classList.add("home");

  // foto de capa
  const image = document.createElement("img");
  image.src = homeImage;
  image.alt = "Mesa com pratos nordestinos em panelas de barro";

  // título e slogan
  const title = document.createElement("h1");
  title.textContent = "Arretado — Cozinha Nordestina";

  const slogan = document.createElement("p");
  slogan.classList.add("slogan");
  slogan.textContent = "Sabor de vó, tempero do sertão.";

  // texto de apresentação
  const about = document.createElement("p");
  about.textContent =
    "Do baião de dois à cartola, cada prato do Arretado é feito com " +
    "ingredientes que vêm direto do Nordeste: queijo coalho, carne de sol, " +
    "macaxeira e manteiga de garrafa. Aqui a comida é farta e o atendimento " +
    "é como em casa.";

  // bloco de horário
  const hours = document.createElement("div");
  hours.classList.add("horario");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Horário de funcionamento";

  const list = document.createElement("ul");
  const schedule = [
    "Terça a sexta: 11h às 15h e 18h às 23h",
    "Sábado e domingo: 11h às 23h",
    "Segunda: fechado",
  ];
  schedule.forEach((line) => {
    const item = document.createElement("li");
    item.textContent = line;
    list.appendChild(item);
  });

  hours.appendChild(hoursTitle);
  hours.appendChild(list);

  // monta tudo dentro da Home, na ordem em que aparece na tela
  home.appendChild(image);
  home.appendChild(title);
  home.appendChild(slogan);
  home.appendChild(about);
  home.appendChild(hours);

  // e coloca a Home dentro do #content
  content.appendChild(home);
}
