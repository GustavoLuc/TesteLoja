function soma(){
    let soma = 0

    //ARGUMENTS - o objeto arguments é uma variável local disponivel dentro de todas as funções. Voce pode referenciar os argumentos de uma função usando o objeto arguments. Esse objeto contém um 
    //registro para cada argumento fornecido para a função, com o índice do primeiro registro começando com 0 . Nao é um array,é similar a um array
    for(i in arguments){
        soma += arguments[i]  
         
    }
    return soma
    
}

//ele soma os argumentos/parametros

console.log(soma())
console.log(soma(1,2,3,4))
console.log(soma(1,2,'teste'))
console.log(soma('a','b','c'))
