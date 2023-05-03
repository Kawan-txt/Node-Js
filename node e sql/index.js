const express = require("express")
const app = express()

// rotas
app.get("/", function(req,res){
    res.send('Seja bem vindo ao agendamento de eventos!')
})

app.get("/sobre", function(req,res){
    res.send('Sobre ...')
})

app.listen(8081, function(){
    console.log('Servidor rodando na url:http://localhost:8081/')
})