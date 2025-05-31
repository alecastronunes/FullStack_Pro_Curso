/* 1. A lista deve conter os seguintes produtos: Computador, Telefone, Mouse e Teclado. Exiba essa lista no console quando abrir o index.html */
const lista = ["Computador", "Telefone", "Mouse", "Teclado"];

// 2. Mostre quantos produtos tem na lista.
console.log(`A lista tem ${lista.length} produtos`);

// 3. Retire o produto "Mouse" da lista e retorne no console a lista com os produtos restantes.
// 1º Forma de fazer.
// lista.find((item, index) => {
//   if (item === "Mouse") {
//     lista.splice(index, 1); // Remove o Mouse pelo index, que nesse caso é o 2
//     console.log(lista);
//   }
// });

// 2º Forma de fazer.
const novaLista = lista.filter((item) => item != "Mouse");
console.log(novaLista);

// 4. Faça uma busca na sua lista por algum produto, por exemplo, procure por Computador e caso exista esse produtona sua lista, exiba um console falando que este produto exise e mostre também o nome deste produto, caso não exista, mostre uma mensagem avisando que o produto não foi encontrado.

lista.find((item) => {
  if (item === "Teclado") {
    console.log(`O produto ${item} existe na lista.`);
  } else {
    console.log(`O produto ${item} não existe na lista.`);
  }
});

// 5. Remova o segundo item da sua lista.
lista.splice(1, 1);
console.log(lista);
