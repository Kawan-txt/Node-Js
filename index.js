let express = require("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/criador", function(req,res){
    res.send("Criador desse site foi o Kawanzin")
})

app.get('/identidade/:nome/:idade/:sexo', function(req,res){
    res.send("<h1>Olá " + req.params.nome + " Seja Bem Vindo! </h1>"+"<h1>Sua idade é de: " + req.params.idade + "</h1>"+"<h1> Seu sexo é de: " + req.params.sexo + "</h1>")
})


app.listen(8081, function(){
    console.log("Servidor rodando na url:http://localhost:8081/")
});