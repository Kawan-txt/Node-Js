const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '314269', {
    host: 'localhost',
    dialect: 'mysql'
})

// criando postagem
let postagem = sequelize.define('Postagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },
    data: {
        type: Sequelize.DATE
    }
})

let cliente = sequelize.define('Clientes', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


// autentificação
sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso!")
}).catch(function(erro){
    console.log("falha na conexão, causada por: "+ erro)
})