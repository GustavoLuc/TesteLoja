
const array = ["gustavo","lucas","nascimento","gomes"]

 
 
  for(conta in array){

    for(teste in array ){
     if(conta == 3 && teste == 2)  break 
        console.log('Par: ',conta,teste) 
    }
 }
console.log('---------------------')
 
 for (a in array) {
     for (b in array) {
         if(a == 2 && b == 3) break 
         console.log(`Par = ${a},${b}`)
     }
 }