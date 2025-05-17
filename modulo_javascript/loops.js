// let x = 0;
// while (x <= 10) {
//   document.writeln("O valor de X é: " + x + "<br/>");
//   x++;
// }

// let quantidade = Math.floor(Math.random() * 5 + 1);
// for (let i = 0; i < quantidade; i++) {
//   document.writeln("O valor de i é: " + i + "<br/>");
// }

function pedir() {
  let opcao = parseInt(prompt("Digite um valor de 1 a 4"));
  switch (opcao) {
    case 1:
      alert("PEDIDO ESCOLHIDO = Suco");
      break;
    case 2:
      alert("PEDIDO ESCOLHIDO = Água gelada");
      break;
    case 3:
      alert("PEDIDO ESCOLHIDO = Sorvete");
      break;
    case 4:
      alert("OPÇÂO ESCOLHIDA = Chamar o garçom");
      break;
    default:
      alert("Digite um valor de 1 a 4!!!");
  }
}

let numero = 10;

numero === 10 ? console.log("Verdadeiro") : console.log("Falso");

