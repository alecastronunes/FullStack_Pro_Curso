let resultado = document.getElementById("area");

function entrar() {
  let nome = prompt("Qual seu nome?");

  if (nome === "" || nome === null) {
    alert("Operação inválida!!!");
    resultado.innerHTML = "Clique no botão para começar.";
  } else {
    resultado.innerHTML = "Bem vindo(a), " + nome + " ";
    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair;
    resultado.appendChild(botaoSair);
  }
}

function sair() {
  alert("Você saiu!!!");
  resultado.innerHTML = "Você saiu!!!";
}

function calcularMedia(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3;

  if (media >= 7) {
    console.log("Parabéns, você foi aprovado. Média: " + media.toFixed(2));
  } else {
    console.log("Você foi reprovado. Média: " + media.toFixed(2));
  }
}
