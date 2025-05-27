// function convidados(...nomes) {
//   console.log("Sejam bem vindos a minha festa!!!");
//   console.log(nomes);
// }

// convidados("Zé da Manga", "Tiriça", "Lombriga");

function sorteador(...numeros) {
  console.log(numeros);
  const sortearNumero = Math.floor(Math.random() * numeros.length);
 
  console.log(sortearNumero);
  console.log(numeros[sortearNumero]);
}

sorteador(15, 33, 34, 2, 6, 7, 8, 98, 100, 102, 58);
