const valores = [80,8.4,80,6.9] 
console.log(valores[0],valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)
console.log(valores.length)

console.log(valores.pop())
  valores.splice(0,1);
console.log(valores)

console.log(typeof valores)
