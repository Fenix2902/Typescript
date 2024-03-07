(()=>{
const calcTotal = (prices:number[]): string=>{
  let total = 0
  prices.forEach((item)=>{
    total += item
  })
  return total.toString()
}

const printTotal = (princes:number[]): void=>{
const rta = calcTotal(princes)
console.log(`El total es ${rta}`)
}
printTotal([1,2,1,1,7,])



})()
