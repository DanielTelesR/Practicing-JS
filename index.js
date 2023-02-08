// Calculando a parcela de honorários do advogado.

var danoMaterial = 2525;
var danoMoral = 3500;
var porcentagemAdv = 0.3;

function calculoParcela(x, y) {
  return (x + y) * porcentagemAdv;
}

console.log("O Advogado receberá: R$", calculoParcela(danoMaterial, danoMoral));

// Calculando o salário líquido.

var salarioBruto = 7000;
var impostoRenda = 0.275;
var salarioLiquido = salarioBruto - (salarioBruto * impostoRenda);

console.log("Salário líquido é de: R$", salarioLiquido.toFixed(2));

// Laço for infinito

for (var i = 0; i++;) {
  console.log("Esse é um exemplo de trava zap!");
}

// Simulando uma análise de BPC - Direito Previdenciário

const prompt = require("prompt-sync")();
console.log("Olá. Vamos fazer a análise do pedido de BPC/LOAS.\n");
var nome = prompt("Digite o seu nome completo: ")
var renda = parseFloat(prompt("Informe a sua renda mensal: "));
console.log("\nAgora, precisamos saber a sua condição física.\n")
var condicaoFisica = prompt("Portador de Deficiência ou Idoso? - Informe 'D' ou 'I': ");
var familiares = parseFloat(prompt("\nQuantas pessoas compõem o núcleo familiar? "));
for (i = 1; i <= familiares; i++) {
  console.log("\nAgora, vamos aferir a renda do núcleo familiar como um todo. Informe os ganhos do", i, "° familiar.");
  var renda_membroFamilia = parseFloat(prompt("Renda: "));
  var renda = renda + renda_membroFamilia;
}
var renda_perCapita = renda / (familiares + 1);
if ((condicaoFisica == "D" && renda_perCapita < 303) || (condicaoFisica == "I" && renda_perCapita < 303)) {
  console.log("Informamos que", nome, "preenche os requisitos para solicitar o BPC.");
  console.log("Renda per Capita R$: ", renda_perCapita.toFixed(2));
} else {
  console.log("Considerando os dados informados", nome, "não preenche os requisitos.");
  console.log("Renda per Capita R$: ", renda_perCapita.toFixed(2));
}




