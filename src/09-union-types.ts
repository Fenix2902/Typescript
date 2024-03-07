(()=>{
let userId: (string | number);
userId = 123;
userId = 'hola'

function greeting(myText:string|number){
if(typeof myText=== 'string') {
    console.log(`Hello, ${myText.toLowerCase()}!`)
} else
console.log(`Tu nùmero es, ${myText.toFixed(1)}`)
}
greeting('Hola') // ok
greeting(12.12)
})()
