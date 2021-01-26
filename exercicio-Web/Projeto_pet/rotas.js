const express = require("express")
const rota = express()

rota.get('/registro',function(req,res){
    res.sendFile("C:\Users\G_022\OneDrive\Área de Trabalho\exercicio-Web\Projeto_pet\index.html")
})

rota.listen(8080)