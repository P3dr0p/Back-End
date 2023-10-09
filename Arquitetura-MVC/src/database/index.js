const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const User = require("../config/database")
const Thought = require("../models/Thought")

const connection = new Sequelize(databaseConfig);

module.exports = connection;