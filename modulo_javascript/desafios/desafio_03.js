/* Crie uma string que contenha o dia de hoje. */
const mesesDoAno = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = mesesDoAno[dataAtual.getMonth()];
let ano = dataAtual.getFullYear();
console.log(`Data atual do sistema: ${dia} de ${mes} de ${ano}.`);
