// Importando o framework express
const express = require("express")

// Importando o arquivo de usercontroller, que contem o as funções de criar, buscar, atualizar e deletar os dados do usuário.
const Usercontroller = require("./controllers/usercontroller");

// Inicializar as rotas
const routes = express.Router();

// Criado a rota /users utilizando o método post para cadastrar o usuário na aplicação/banco de dados.
routes.post("/users", Usercontroller.store);

// Rota para buscar os dados dos usuários que foram cadastrados no banco de dados.
routes.get("/users", Usercontroller.index);

// Rota para deletar um registro na aplicação
routes.delete("/users/:id", Usercontroller.delete);

// Rota de registro
routes.put("/register", Usercontroller.update);

module.exports = routes;