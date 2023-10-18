const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const User = require("../models/User")
const Thought = require("../models/Thought")

const connection = new Sequelize(databaseConfig);

User.init(connection);
Thought.init(connection);

module.exports = connection;