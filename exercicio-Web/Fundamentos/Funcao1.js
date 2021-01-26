//Funcao sem retono

function imprimirSoma(a,b){
    console.log(a+b) 
}

imprimirSoma(2,4)
imprimirSoma(2)
imprimirSoma()


//Função com retorno

function soma(a, b = 2){

    return a+b


}

console.log(soma(2,9))
console.log(soma(2))
console.log(soma())