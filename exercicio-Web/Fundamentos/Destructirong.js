//recurso ES2015

const pessoa = {
    nome : 'Ana',
    idade: 54,
    endereco : {
        logradouro: 'Rua ABC',
        numero: 100
    } 
}

const {nome,idade} = pessoa
console.log(nome,idade)

const {nome : n, idade : i} = pessoa
console.log(nome,idade)

const {sobrenome,bemHumorado = true} = pessoa
console.log(sobrenome,bemHumorado)

const {endereco:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)