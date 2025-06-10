// function convidados(...nomes) {
//   console.log("Sejam bem vindos a minha festa!!!");
//   console.log(nomes);
// }

// convidados("Zé da Manga", "Tiriça", "Lombriga");

function sorteador(...numeros) {
  // console.log(numeros);
  const sortearNumero = Math.floor(Math.random() * numeros.length);

  // console.log("Índice -> " + sortearNumero);
  // console.log("Valor -> " + numeros[sortearNumero]);
  console.log(`A pessoa sorteada para fazer o café é: ${numeros[sortearNumero]}`);
}

sorteador("Igor", "Emyna", "Kaique");
