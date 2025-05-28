// Trabalhando com MAP

// let lista = ["Naruto", "Sassuke", "Kakashi", "Obito"];

// lista.map((item, index) => {
//   console.log(`Passando: ${item} - está na posição ${index}`);
// });

// Reduce
let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total até o momento`);
  console.log(`${numero} - valor atual`);
  console.log(`${indice} - indice atual`);
  console.log(`${original} - array original`);
  console.log("===============================");

  return acumulador += numero;
});

console.log("TOTAL DO REDUCE: " + total)
