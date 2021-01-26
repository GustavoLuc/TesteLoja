function area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log('valor acima do permitido '+area+' m².')
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,4,12,34,34))
console.log(area(5,5))