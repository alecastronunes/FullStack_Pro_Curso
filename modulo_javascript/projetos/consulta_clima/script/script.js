const urlApiClima = "https://api.openweathermap.org/data/2.5/weather?q=";
const minhaChaveApi = "b4c3430dfcfef48eb736810b2207d5d6";
const cidade = "São Paulo";

const urlComChave = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${minhaChaveApi}&lang=pt_br`;

let condicaoCeu = document.getElementById("descricao");
let condicaoClima = document.getElementById("condicao-clima");

function consultaClima() {
  fetch(urlComChave)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      condicaoCeu.textContent = `Condição do Céu: ${data.weather[0].description}`;
    })
    .catch(() => {
      console.log("Ocorreu algum erro na requisição!!!");
    });
}

consultaClima();
