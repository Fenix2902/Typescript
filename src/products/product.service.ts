import {Product}from './product.model';

 export const products: Product[] = [];

 export const addProduct = (data:Product) => {
    products.push(data)
  }

  export const calcStock = (): number =>{
    let stock=0;
    products.forEach((item)=>{
      stock += item.stock
    })
   return stock
  }
