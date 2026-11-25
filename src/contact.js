import criarHorario from "./horario.js";

// dados do restaurante: troque pelos seus
const contato = {
  endereco: "Rua das Flores, 123 – Centro, Rio de Janeiro – RJ",
  telefone: "(21) 3333-4444",
  whatsapp: "(21) 99999-0000",
  email: "contato@restaurante.com.br",
};

// cria uma linha com um rótulo em negrito e um valor
function criarLinha(rotulo, valor) {
  const linha = document.createElement("p");

  const titulo = document.createElement("strong");
  titulo.textContent = `${rotulo}: `;

  linha.appendChild(titulo);
  linha.appendChild(valor);

  return linha;
}

// cria um link clicável (telefone, WhatsApp ou e-mail)
function criarLink(texto, endereco) {
  const link = document.createElement("a");
  link.textContent = texto;
  link.href = endereco;
  return link;
}

// função exportada: monta a página de contato no #content
export default function loadContact() {
  const content = document.querySelector("#content");

  const pagina = document.createElement("div");
  pagina.classList.add("contact");

  const titulo = document.createElement("h1");
  titulo.textContent = "Contato";

  const endereco = document.createTextNode(contato.endereco);

  // só os números, para os links funcionarem
  const numeroWhats = contato.whatsapp.replace(/\D/g, "");
  const numeroTel = contato.telefone.replace(/\D/g, "");

  pagina.appendChild(titulo);
  pagina.appendChild(criarLinha("Endereço", endereco));
  pagina.appendChild(criarLinha("Telefone", criarLink(contato.telefone, `tel:+55${numeroTel}`)));
  pagina.appendChild(criarLinha("WhatsApp", criarLink(contato.whatsapp, `https://wa.me/55${numeroWhats}`)));
  pagina.appendChild(criarLinha("E-mail", criarLink(contato.email, `mailto:${contato.email}`)));

  pagina.appendChild(criarHorario());
  content.appendChild(pagina);
}
