const { DataTypes } = require("sequelize");

const db = require("../db/conn");

//Importar as tabelas para o relacionamento
const User = require("./User");
const Publication = require("./Publication");

const Comment = db.define('Comment', {
    Comment: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
});


Comment.belongsTo(User);
Comment.belongsTo(Publication);

User.hasMany(Comment)
Publication.hasMany(Comment)
;

module.exports = Comment;