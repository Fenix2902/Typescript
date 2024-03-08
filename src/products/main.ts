import {addProduct, calcStock, products} from './product.service'

addProduct({
  title: "Camisa",
  createdAt: new Date(),
  stock: 10
});
console.log(products);

products.push({
title: "Pantalon",
createdAt: new Date(),
stock: 5,
size: 'm'
})
console.log(products);

const total = calcStock();
console.log(`total de Stock es: ${total}`);
