// src/horario.js
// horário de funcionamento: o único lugar onde ele está escrito
const horarios = [
  { dias: "Terça a sexta", horas: "11h às 15h e 18h às 23h" },
  { dias: "Sábado e domingo", horas: "11h às 23h" },
  { dias: "Segunda", horas: "Fechado" },
];

// cria o bloco de horário (título + lista), usado na Home e no Contato
export default function criarHorario() {
  const secao = document.createElement("div");
  secao.classList.add("horario");

  const titulo = document.createElement("h2");
  titulo.textContent = "Horário de funcionamento";

  const lista = document.createElement("ul");

  horarios.forEach((item) => {
    const linha = document.createElement("li");
    linha.textContent = `${item.dias}: ${item.horas}`;
    lista.appendChild(linha);
  });

  secao.appendChild(titulo);
  secao.appendChild(lista);

  return secao;
}
