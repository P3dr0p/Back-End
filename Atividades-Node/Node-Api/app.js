const express = require("express");
const {randomUUID} = require("crypto");

const app = express();

app.use(express.json());

// Criando um array de produtos
const produtos = [];
 
// POST -> Inserir um dado
app.post("/produtos", (request, response) => {
    // name, price, descrition

    // Destruturando um objeto
    const { name, price, description } = request.body

    const produto = {
        id: randomUUID(),
        name,
        price,
        description 
    }

    produtos.push(produto);

    return response.json(produto);
});

// Acessando a rota de produtos para buscar pelos produtos cadastros na aplicação
app.get("/produtos", (request, response) => {
    return response.json(produtos);
});

app.get("/produtos/:id", (request, response) => {
    const { id } = request.params

    const produto = produtos.find((produto) => produto.id === id);

    return response.json(produto);
});

app.put("/produtos/:id", (request, response) => {
    const { id } = request.params;
    const {  name, price, description  } = request.body

    const produtoIndex = produtos.findIndex((produto) => produto.id === id);

    produtos[produtoIndex] = {
        // spread = Pega todos os valores que estão no array
        ...produtos[produtoIndex],
        name,
        price,
        description
    }

    return response.json({message: "Produto foi atualizado com sucesso"});
});

app.delete("/produtos/:id", (request, response) => {
    const { id } = request.params;

    const produto = produtos.findIndex((produto) => produto.id === id);

    produtos.splice(produto, 1);

    return response.json({"message": "Produto deletado com sucesso"});
});


app.listen(3001, () => console.log("Servidor está sendo executado na porta 3001"));