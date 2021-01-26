//armazenando funcao em uma variavel

const imprimirSoma = function (a,b){
console.log(a + b)
}

imprimirSoma(2,5)

//armazenando uma funcao arrow em uma variavel
const soma = (a,b) =>{
    return a + b
}

console.log(soma(6,9))


//retorno implícita
const subtracao = (a,b) => a - b


console.log(subtracao(8,5))

const imprimir2 = a =>console.log(a)

imprimir2('Legal!!!')