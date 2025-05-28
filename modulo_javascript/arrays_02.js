// Find
let listagem = [5, 3, "Minato", 2, "Kushina"];

listagem.find((item) => {
  if (item === "Minato") {
    return console.log("O convidado está na lista, pode entrar!!!");
  } else {
    return console.log("O nome não está na lista, não pode entrar!!!");
  }
});

// Filter
let palavras = [
  "Minato",
  "Kushina",
  "Naruto",
  "Boruto",
  "Himawari",
  "Kakashi",
  "Sassuke",
  "Ino",
];

let resultado = palavras.filter((item) => {
  return item.length <= 6;
});

console.log(resultado);
