// conexão sequelize com sql
const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('sistema_de_cadastro', 'root', '314269', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};