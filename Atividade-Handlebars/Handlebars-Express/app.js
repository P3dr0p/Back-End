const express = require("express");
const exphbs = require("express-handlebars");
const mysql2 = require("mysql2");

const app = express(); // Utilizando o express

// Configurando a template engine handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// middleware para utilizar arquivos estáticos
app.use(express.static(__dirname + 'public'));

// Para receber informações do Front-end
// Utilizando o formato json()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (request, response) => {
    return response.render("home");
});


app.post("/books/insertbooks", (request, response) => {
    const { title, numero_paginas } = request.body

    const sql = `INSERT INTO books(title, numero_paginas) VALUES('${title}', ${numero_paginas});`

    connection.query(sql, (error) => {
        if(error) {
            console.log(error);
        }

        return response.redirect("/");
    });
});

app.get("/books", (request, response) => {
    const sql = `SELECT * FROM books`
    // Ao acessar a rota principal vai ser retornada a página home.
    connection.query(sql, (error) => {
        if(error) {
            console.log(error);
        }

        const books = data

        return response.render('books', {books});
    });
});

app.get("/books/:id", (request, response) => {
    const { id } = request.params

    const sql = `SELECT * FROM books WHERE = ${id};`

    connection.query(sql, (error, data) => {
        if(error) {
            console.log(error);
        }

        const book = data;

        return response.render("book", {book});
    });
});

// Criando a conexão com o banco de dados
const connection = mysql2.createConnection({
    host: "localhost",
    user: "aluno_medio",
    password: "@lunoSenai23.",
    database: "system_books"
});

app.post("/cadastrar", (request, response) => {
    
    const { título, paginas, editora } = request.body

    const inserirMysql = `INSERT INTO books(titulo, paginas, editora) VALUES ('${título}', '${paginas}', '${editora}')`

    connection.query(inserirMysql, (error) => {
        if(error){
            console.error(error)
            return response.status(500).json({error: "Error ao inserir informações no banco de dados"})
        }

        return response.redirect('./')
    });
});

// Estabelecer a conexão com banco
connection.connect((error) => {
    // Verificando se existe algum error
    if(error) {
        return console.log(error);
    }

    // Caso nenhum erro seja encontrado vai ser retornado essa mensagem no console(terminal).
    console.log("Mysql está conectado");

    // Na porta 3333 é onde o servidor vai está sendo executado.
    app.listen(3333, () => console.log("Servidor está sendo executado na porta 3333"));
});