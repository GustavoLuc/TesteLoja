const peso1= 1.0
const peso2= Number ('2.0')

console.log(peso1+peso2)
console.log(Number.isInteger(peso1))

let inteiro = Number.isInteger(peso2)

const avaliando1 = 9.570
const avaliando2 = 6.276

const total = avaliando1 * peso1 + avaliando2 * peso2  
const media = total / (peso1 + peso2)

console.log(media.toFixed(1))
console.log(media.toString())
console.log(typeof media)