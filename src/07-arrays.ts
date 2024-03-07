(() => {
    let prices = [1,22,1,1,212, 'hola', true];
    prices.push(1254);

    let products = ['hola', true];
    products.push(12);

    let mixed: (number | string | boolean | object)[]= ['hola',true]
    mixed.push(10)
    mixed.push('holita')
    mixed.push({nombre:'laptop'})
    mixed.push([3,4])

    let numbers = [1,22,1,1,212];
    numbers.map(item => item * 2)
})()
