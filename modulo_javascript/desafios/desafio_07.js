// Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?
const products = [
  { name: "Maça", price: 2.5 },
  { name: "Coca cola", price: 8 },
  { name: "Guarana", price: 5 },
  { name: "Chocolate", price: 20 },
];

for (const product of products) {
  if (product.price < 8) {
    console.log(`Produto com preço menor que R$
        8,00: ${product.name}`);
  }
}
