const express = require("express")
const rota = express()
const bodyParser = require("body-Parser")
const cadastrandoCliente = require("./index")
const connexao_banco = require("./connexao_banco")


rota.use(bodyParser.urlencoded({extended:false}))
rota.use(bodyParser.json())

rota.get('/',function(req,res){
    res.sendFile(__dirname+"/src/index.html")
})

rota.get('/cad',function(req,res){
res.render('/cad')
})


rota.post('/cadastro',function(req,res){
    res.send(cadastrandoCliente(req.body.nome, req.body.tel))
    
    
}).then(function(){
    res.send("dsf")
}).cath(function(){
    res.send("asda"+erro)
})


rota.listen(8080)