// express 
const express = require('express');
const app = express();

// Sequelize model
const post = require('./models/post')

//bodyparser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//handlebars
const handlebars = require('express-handlebars');

//config
    // template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    app.set('views', './views');


// rotas

app.get('/', function(req,res){
    post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get("/agendas", function(req,res){
    res.render('formulario')
});

app.post("/agendamentos", function(req, res){
    
    post.create({
        Evento: req.body.titulo,
        Conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro na criação do evento: " + erro)
    })

})

app.get('/deletar/:id', function(req,res){
    post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Agenda apaga com sucesso!!")
    }).catch(function(erro){
        res.send("Erro ao deletar postagem"+ erro)
    })
})

app.listen(8081, function(){
    console.log("Conexão realizada com sucesso!")
});