function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn"); // capturando o botao do meu html
const form = document.getElementById("devForm"); // capturando meu formulario
const developers = [];
let inputRows = 0; // iniciando a variavel que vai conyabilizar os ids em 0

addTechBtn.addEventListener("click", function (ev) {
  const stackInpunts = document.getElementById("stackInputs"); // Setando minha lista não ordenada.

  const newRow = document.createElement("li"); // cada linha da minha lista não ordenada
  const rowIndex = inputRows; // adicionando um indice para cada linha (elemento li)
  inputRows++;
  newRow.id = "inputRow-" + rowIndex; // para cada elemento que eu estiver criando, irei dar um ID diferente
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome:", "techName", rowIndex); // usando a função criada, e seus parametros
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  const expLabel = createLabel("Experiência:");
  const id1 = "ExpRadio-" + rowIndex + "0.1"; // id individual de cada input do tipo radio
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  ); // criando input do tipo radio
  const expLabel1 = createLabel("0-2 anos", id1);

  const id2 = "ExpRadio-" + rowIndex + "0.2";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  ); // importante colocar um id diferente para cada linha, para não interpretar como um conjunto de todos os botoes, podendo assim marcar apenas uma opcao
  const expLabel2 = createLabel("3-4 anos", id2);

  const id3 = "ExpRadio-" + rowIndex + "0.3";
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  const expLabel3 = createLabel("5+ anos", id3);

  const removeRowBtn = document.createElement("button"); // criando um botão para remover as linhas
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    stackInpunts.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  ); // Adicionando a label e o botão de cada item que vai conter na lista
  stackInpunts.appendChild(newRow); // adicionando a linha com o label e o botao na lista de fato
});

// adicionar o evento de submissão do formulario
form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullNameInput = document.getElementById("fullName");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = []; // criando um array para armazenar as tecnologias marcadas pelos devs

  // iterando sobre as linhas da minha lista
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value; // pegando o valor do nome da tecnologia de uma linha especifica, atraves de seu id
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value; // pegando o valor dos inputs radio que estiverem marcados
    technologies.push({ name: techName, exp: techExp }); // adicionando os valores dentro do array, mas em forma de objeto
  });

  const newDev = { fullname: fullNameInput.value, technologies }; // armazenando os valores do nome completo, e tecnologia
  developers.push(newDev); // adicionando esses valores ao array developers

  fullNameInput.value = "" // zerando o valor do input com o nome completo

  inputRows.forEach(function (row) {
    // iterando sobre cada linha e excluindo
    row.remove();
  });

  console.log(developers);
});

