

(async () => {
    const connexao_banco = require("./connexao_banco");
   // console.log('Começou!');

//INSERT

   // console.log('INSERT INTO CLIENTES');
   
   async function cadastrandoCliente(n,t){
   const result = await connexao_banco.insertCustomer({nome: n, tel: t});
    console.log("Cadastro concluido com Sucesso!")
    
   }
   module.exports = cadastrandoCliente
/*
//SELECT 

    console.log('SELECT * FROM CLIENTE');
    const cliente = await connexao_banco.selectCustomers();
    console.log(cliente);

//UPDATE

try {
    console.log('tentando update');
const result2 = await connexao_banco.updateCustomer("6", {nome: "Zé José", tel:"20"});
console.log(result2);
console.log('update realizado');

} catch (error) {
    console.log("update nao foi realizado algo de errado no codigo sql")
}

//DELETE

console.log('DELETE FROM CLIENTES');*/
/*async function deleteSelecionado(numero,numero2){
    while(numero<=numero2){
var result3 = await connexao_banco.deleteCustomer(numero);
numero++
    }
return console.log(result3)
}*/
//const result4 = await connexao_banco.deleteCustomer(15);
//console.log(result4);


    
})();
