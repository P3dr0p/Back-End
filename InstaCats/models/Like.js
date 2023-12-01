const { DataTypes } = require("sequelize");

const db = require("../db/conn");

//Importar as tabelas para o relacionamento
const User = require("./User");
const Publication = require("./Publication");

const Like = db.define('Like', {});

Like.belongsTo(User);
Like.belongsTo(Publication);

User.hasMany(Like)
Publication.hasMany(Like)

module.exports = Like;