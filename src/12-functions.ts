(() => {
  type Sizes = 's' | 'm' | 'l' | 'xl';

  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

const producto1 = createProductJson('P1',new Date(),12,"xl");
console.log(producto1);
console.log(producto1.title)

const createProductJsonV2 =(
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
) => {
  return{
    title,
    createdAt,
    stock,
    size
  }
}

const producto2 = createProductJsonV2('P1',new Date(),12);
console.log(producto2);
console.log(producto2.title)
console.log(producto2.size)

})();
