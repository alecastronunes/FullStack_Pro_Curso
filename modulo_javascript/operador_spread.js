// let primeiros = [1, 2, 3];

// let numeros = [...primeiros, 4, 5, 6];

// console.log(numeros);

// let pessoa = {
//   nome: "Hinata",
//   idade: 26,
//   cargo: "Hokage",
// };

// let novaPessoa = {
//   ...pessoa,
//   status: "Ativo",
//   cidade: "Konoha",
//   telefone: "45842579",
// };

// Cadastrando um usuário
function novoUsuario(info) {
  let data = {
    ...info,
    status: "Ativo",
    incio: "26/06/2026",
    codigo: "01010101",
  };
  console.log(data);
}

novoUsuario({
  nome: "Alexandre",
  sobrenome: "de Castro Nunes",
  cargo: "Desenvolvedor FullStack",
});
