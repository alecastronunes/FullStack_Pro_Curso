// Desconstruindo objeto

// let pessoa = {
//   nome: "Alexandre",
//   sobrenome: "de Castro Nunes",
//   empresa: "Ainda não sei",
//   cargo: "Programador FullStack",
// };

// let nome = "Renomeando a variável NOME";
// // console.log(pessoa.nome);
// // console.log(pessoa.cargo);

// const { nome: nomePessoa, sobrenome, cargo } = pessoa;

// console.log(`Nome: ${nomePessoa} ${sobrenome}`);
// console.log(`Cargo do colaborador: ${cargo}`);

// ===========================================================================

// Desconstruindo Array

// let nome = ["Tiriça", "Zé da Manga", "Matuzalém", "Boca de égua"];

// // 1º Forma:
// const { 0: primeiroCandidato, 1: segundoCandidato } = nome;
// console.log(primeiroCandidato);
// console.log(segundoCandidato);

// // 2º Forma:
// const [primeiroNome, segundoNome] = nome;
// console.log(`O nome da primeira pessoa é: ${primeiroNome}`);

// // console.log(nome.indexOf(primeiroNome));
// // console.log(nome.indexOf(segundoNome));

let nome = ["Tiriça", "Zé da Manga", "Matuzalém", "Boca de égua"];

const [primeiroAluno, segundoAluno, terceiroAluno, quatoAluno] = nome;

console.log(quatoAluno);
