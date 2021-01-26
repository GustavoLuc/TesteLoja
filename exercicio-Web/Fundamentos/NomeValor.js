//par nome/valor    
const saudacao = 'opa'//contexto léxico 1

function exec(){

    const saudacao = "falaaa" //contexto léxico 2
    return saudacao 
    
}

console.log(saudacao)

console.log(exec())

//objetos sao grupos aninhados de pares nome/valor


const cliente = {
    nome:'pedro',
    idade:24,
    peso:90,
    endereco:{
            lagradouro: 'Rua Muito Top',
            numero:2344

                }

        }


        console.log(cliente.endereco.numero)