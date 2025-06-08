// Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

function verificadorNumero(numero) {
  if (numero < 0) {
    console.log(`O número ${numero} é negativo!!!`);
  } else if (numero > 0) {
    console.log(`O número ${numero} é positivo!!!`);
  } else {
    console.log(`O número ${numero} é igual a zero!!!`);
  }
}

verificadorNumero(0);
