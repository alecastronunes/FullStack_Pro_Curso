const urlApiPaises = "https://flagsapi.com/";
const minhaChaveApi = openWeatherApiKey;
const botaoPesquisar = document.querySelector("#search");
const inputCidade = document.querySelector("#city-input");

function consultaClima() {
  const inputCidade = document.querySelector("#city-input");
  const cidade = inputCidade.value;
  const urlComChave = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${minhaChaveApi}&lang=pt_br`;
  const cidadeEscolhida = document.querySelector("#city");
  const temperatura = document.querySelector("#temperature");
  const clima = document.querySelector("#description");
  const umidade = document.querySelector("#umidity");
  const velocidadeVento = document.querySelector("#wind");
  const iconeImagem = document.querySelector("#weather-icon");
  const paisImagem = document.querySelector("#country");
  const dadosClima = document.querySelector(".weather-data");

  fetch(urlComChave)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod == 404 || data.cod == 400) {
        alert(
          "Cidade não encontrada. Por favor, informe uma cidade com o nome válido!!!"
        );
        cidadeEscolhida.textContent = "Cidade não encontrada.";
        return;
      } else {
        cidadeEscolhida.textContent = `${data.name}`;
        temperatura.innerText = `${parseInt(data.main.temp)} °C`;
        clima.innerText = data.weather[0].description;
        umidade.innerText = `${data.main.humidity}%`;
        velocidadeVento.innerText = `${data.wind.speed}km/h`;
        iconeImagem.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        );
        paisImagem.setAttribute(
          "src",
          `https://flagsapi.com/${data.sys.country}/flat/64.png`
        );
        dadosClima.classList.remove("hide"); // remove a classe "hide" que esconde a div com os dados do clima.
        console.log(data);
        console.log(cidade);
      }
    })
    .catch(() => {
      console.log("Ocorreu algum erro na requisição!!!");
    });

  inputCidade.value = "";
}

inputCidade.addEventListener("keyup", (e) => {
  // e.preventDefault();
  if (e.code === "Enter") {
    cidade = e.target.value;
    consultaClima();
  }
});
