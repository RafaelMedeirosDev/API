const { Sequelize } = require('sequelize') //Importando o sequelize
const dotenv = require('dotenv')

dotenv.config();

const sequelize = new Sequelize (
    process.env.DB_DATABASE,    //Pegando as informações que foram armazenadas nas variavel de ambiente(.env)
    process.env.DB_USER,
    process.env.DB_PASSWORD, 
    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
    
})

//process.env pega as informações armazenadas na variavel de embiente (.env)

module.exports = sequelize;