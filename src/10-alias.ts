(() => {
  type UserID = string | number //Type es uso exclusivo de TS
  let userId: (UserID);


  /* function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`Hello, ${userId.toLowerCase()}!`)
    }
  }
  greeting('Hola') // ok
  greeting(12.12) */

  //Literal Types
  type Sizes = 's' | 'm' | 'l' | 'xl';
  let shirtSinze: Sizes
  shirtSinze = 'm'
  shirtSinze = 'l'
  shirtSinze = 'xl'

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`Hello, ${userId.toLowerCase()}!`)
    }
  }
  greeting(1111, 's')
})()
