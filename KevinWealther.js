// kelvin to celsius

const kelvin = 0
// kelvin is a constant forcast of current day
let celsius = kelvin -273
// celsius = kelvin -273


// celsius to fahnrenheit
let fahrenheit = celsius *(9/5)+32
// fahren = cels *(9/5)+32
fahrenheit = Math.floor(fahrenheit)
// floor the result whith Math.floor(number)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


// celsius to Newton
let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton`)
