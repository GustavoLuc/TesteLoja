function comprar(trabalho1,trabalho2){
    const tv50 = trabalho1 && trabalho2
    const tv32 = trabalho1 != trabalho2 
    const sorv = trabalho1 || trabalho2
    
    
    return{tv50,tv32,sorv}

}


console.log(comprar(true,true))