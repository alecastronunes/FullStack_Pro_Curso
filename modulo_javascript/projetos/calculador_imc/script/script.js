/* 
    Abaixo de 17 -> Muito abaixo do peso;
    Entre 17 e 18,49 -> Abaixo do peso;
    Entre 18,5 e 24,99 -> Peso normal;
    Entre 25 e 29,99 -> Acima do peso.

    Fórmula -> peso / (altura * altura)
 */

function calcular(event) {
  event.preventDefault();

  let peso = document.getElementById("peso").value;
  let altura = parseFloat(document.getElementById("altura").value);
  let resultado = document.getElementById("resultado");

  let imc = peso / (altura * altura);

  // Expressão para validar números decimais ou inteiros
  const validarEntrada = /^\d+(\.\d+)?$/;

  const pesoValido = validarEntrada.test(peso);
  const alturaValida = validarEntrada.test(altura);

  if (pesoValido && alturaValida) {
    if (isNaN(imc) || imc === 0 || altura === 0) {
      alert("Certifique-se de que os campos foram preenchidos corretamente.");
    } else if (imc >= 1 && imc < 17) {
      resultado.innerHTML =
        "<h4>Seu resultado foi: " +
        imc.toFixed(2) +
        "</br> Você está muito abaixo do peso.</h4>";
    } else if (imc >= 17 && imc <= 18.49) {
      resultado.innerHTML =
        "<h4>Seu resultado foi: " +
        imc.toFixed(2) +
        "</br> Você está abaixo do peso.</h4>";
    } else if (imc >= 18.5 && imc <= 24.99) {
      resultado.innerHTML =
        "<h4>Seu resultado foi: " +
        imc.toFixed(2) +
        "</br> Você está no peso normal.</h4>";
    } else {
      resultado.innerHTML =
        "<h4>Seu resultado foi: " +
        imc.toFixed(2) +
        "</br> Você está acima do peso.</h4>";
    }
  } else if (!pesoValido && !alturaValida) {
    alert("Peso e altura inválidos. Digite apenas números");
  } else if (!pesoValido) {
    alert("Peso inválido. Digite apenas números.");
  } else {
    alert("Altura inválida. Digite apenas números.");
  }

  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
