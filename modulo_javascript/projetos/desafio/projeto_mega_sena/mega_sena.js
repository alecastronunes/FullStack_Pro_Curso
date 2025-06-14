function sorteioMegaSena(quantidadeDeNumeros) {
  if (quantidadeDeNumeros < 6 || quantidadeDeNumeros > 9) {
    console.log(`Não é possível usar esse número!`);
    return [];
  }

  const numerosSorteados = [];

  while (numerosSorteados.length < quantidadeDeNumeros) {
    let numeroSorteado = Math.floor(Math.random() * 60) + 1;

    if (!numerosSorteados.includes(numeroSorteado)) {
      numerosSorteados.push(numeroSorteado);
    }
  }

  console.log(`Os números gerados no sorteio são: ${numerosSorteados}`);
  return numerosSorteados;
}

sorteioMegaSena(6);
sorteioMegaSena(8);
