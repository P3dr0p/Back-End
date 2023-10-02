const Sequelize = require("sequelize") // Importando o ORM sequelize

const dbConfig = require("../config/database") // Importando o arquivo de configuração do banco de dados

const User = require("../models/User"); // Importando o modelo da tabela de users

const connection = new Sequelize(dbConfig); // Criando a conexão com o banco de dados

User.init(connection); // Inicializando a conexão com o banco de dados

module.exports = connection; // Exportando a conexão com o banco de dados