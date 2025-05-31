/* Crie uma lista de apenas números 1, 3, 5, 7, 0, 9 */
const listaNumeros = [1, 3, 5, 7, 0, 9];

// 1. Ordene essa lista do menor para o maior.
listaNumeros.sort((a, b) => a - b);
console.log(`Lista ordenada do menor para o maior: ${listaNumeros}`);

// 2. Retire o primeiro número da lista.
listaNumeros.shift();
console.log(`O primeiro número da lista foi remvido: ${listaNumeros}`);

// 3. Iverta toda a ordem da sua lista, por exemplo: [1, 3, 5, 7, 9] para [9, 7, 5, 3, 1]
listaNumeros.sort((b, a) => a - b);
console.log(`Lista ordenada do maior para o menor: ${listaNumeros}`);
