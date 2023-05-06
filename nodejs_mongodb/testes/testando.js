// configurando mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://0.0.0.0:27017/teste", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão Realizada com Sucesso!!")
}).catch((erro) => {
    console.log("Conexão não realizada! " + erro)
});

// Criando collection
const userSchema = mongoose.Schema
const usuarios = new userSchema({
    
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    }

})

mongoose.model('usuarios', usuarios)

// inserindo dados
const users = mongoose.model('usuarios')
new users({

    nome: "Kauã",
    sobrenome: "Sousa",
    idade: 19

}).save().then(() => {
    console.log("Usuario Criado com Sucesso!!")
}).catch((erro) => {
    console.log("Não foi possivel criar usuario!" + erro)
})