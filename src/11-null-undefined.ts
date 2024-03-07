(()=>{
/* let myNumber: number = undefined
let myString: string = null */
let myNull:null = null;
let myUndefined:undefined = undefined

let myNumber:number | null = null
myNumber = 10

let myString: string | undefined = undefined
myString =  'Hello'

function hi(name: string | null){
  let hello = 'hola '
  if(name) {
    hello += name.toLowerCase();
}else{
hello += 'nobody'
}
console.log(`Hi ${hello}`)
}


function hiV2(name: string | null){
  let hello = 'hola '
  hello += name?.toLowerCase() || 'nobody'
console.log(hello)
}

hi('John') // Hi holaname
hi(null)   // Hi holan

hiV2('John') // Hi holaname
hiV2(null)   // Hi holan
})()
