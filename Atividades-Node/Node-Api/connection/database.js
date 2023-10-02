const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "aluno_medio",
    password: "@lunoSenai23.",
    database: "system_products"
});

connection.connect();

connection.query("INSERT INTO products(id, name, description, price) VALUES(1, 'Produto 01', 'Produto cadastrado', 12.50)", (error, result) => {
    if(error) console.error(error);

    console.log(result);
});

connection.end();