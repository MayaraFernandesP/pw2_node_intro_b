const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('ideias_bd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try
{
    sequelize.authenticate()
    console.log('Conectamos com sucesso ao MySQL xampp')
}
catch(error)
{
    console.error(`Deu erro na conexão: ${error}`)
}
module.exports = sequelize
