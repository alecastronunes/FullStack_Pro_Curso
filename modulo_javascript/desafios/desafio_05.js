// Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números.

function encontrarNumero(Listanumeros, numero) {
  if (Listanumeros.includes(numero)) {
    console.log(`O número ${numero} existe dentro do array!!!`);
  } else {
    console.log(`O número ${numero} não existe dentro do array!!!`);
  }
}

let numeros = [3, 6, 5, 4, 5, 0, 4, 8, 10, 50];

encontrarNumero(numeros, 8);
