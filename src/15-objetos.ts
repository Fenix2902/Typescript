(() => {
  type Sizes = 's' | 'm' | 'l' | 'xl';
  type Product = { title: string, createdAt: Date, stock: number, size?: Sizes }

  const products: Product[] = []

  const addProduct = (data:Product) => {
    products.push(data)
  }
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
})()
