(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password);
  }

  // login('nico@nico.co','123456')
  login({
    email: 'nico@nico.co',
    password: 123123
  })

  type Sizes = 's' | 'm' | 'l' | 'xl';

  const products: any[] = []

  const addProduct = (data: { title: string, createdAt: Date, stock: number, size?: Sizes }) => {
    products.push(data)
  }
  addProduct({
    title: "Camisa",
    createdAt: new Date(),
    stock: 10
  });
console.log(products);
})()
