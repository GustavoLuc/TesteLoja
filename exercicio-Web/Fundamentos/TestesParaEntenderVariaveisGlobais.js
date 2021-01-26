let a = 122
let c = 555

this.c = 999

global.b = 50

this.b = 100

this.g = a

adc = 668 //criando variavel global, nao faça isso 

console.log(this.c)// igual e console.log(module.exports.c)
// o this é igual ao module.exports
console.log(module.exports.c)
console.log(this === module.exports) //teste de igualdade

console.log(global.b)

console.log(module.exports.b)



console.log(module.exports.g)

console.log(global.adc)

console.log(module.exports)




// o this é igual ao module.exports