const express = require("express");
const { randomUUID } = require("crypto");

const blog = express();

blog.use(express.json());

const usuario = [];

blog.post("/cadastro", (request, response) => {
    const { nome, email, senha } = request.body
    
    const dados = {
        id: randomUUID(),
        nome,
        email,
        senha
    }

    usuario.push(dados);

    return response.json(dados);
});

blog.get("/cadastro", (request, response) => {
    return response.json(cadastro);
});

blog.get("/cadastro/:id", (request, response) => {
    const { id } = request.params

    const dados = dados.find((dados) => dados.id === id);

    return response.json(dados);
});

blog.put("/cadastro/:id", (request, response) => {
    const { id } = request.params;
    const {  nome, email, senha  } = request.body

    const dadosIndex = cadastro.findIndex((dados) => dados.id === id);

    cadastro[dadosIndex] = {
        ...cadastro[dadosIndex],
        nome,
        email,
        senha
    }

    return response.json({message: "Sua conta foi atualizada com sucesso"});
});

blog.delete("/cadastro/:id", (request, response) => {
    const { id } = request.params;

    const dados = dados.findIndex((dados) => dados.id === id);

    dados.splice(dados, 1);

    return response.json({"message": "Sua conta foi deletada com sucesso"});
});

blog.listen(3200, () => console.log("Servidor está sendo executado na porta 3200"));