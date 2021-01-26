function rand ({min=0 , max=1000}){
const valor  = Math.random() * (max-min) + min
return Math.floor(valor)

}


const obj = {max:50, min:40}
console.log(rand(obj))
console.log(rand({min: 955}))















let id = 0
while(id==0){
 
 
 let teste = rand({max:0, min:1000})
 if(teste == 99){
    console.log(teste)
  console.log('conseguiu')
  id = 1

 }
 else
  console.log(teste)
    
}