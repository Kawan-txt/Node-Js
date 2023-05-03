const bd = require('./bd')

const post = bd.sequelize.define('Postagens', {
    Evento: {
        type: bd.Sequelize.STRING
    },
    Conteudo: {
        type: bd.Sequelize.TEXT
    }
})

module.exports = post