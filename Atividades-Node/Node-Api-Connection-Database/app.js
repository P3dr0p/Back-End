const express = require("express");

const mysql2 = require("mysql2"); 

const app = express();

app.use(express.json());

const connection = mysql2.createConnection({
    host: "localhost",
    user: "aluno_medio",
    password: "@lunoSenai23.",
    database: "system_products"
});

app.post("/produtos", (request, response) => {
    const { name, description, price } = request.body

    const sql = `INSERT INTO products(name, description, price) VALUES('${name}', '${description}', ${price});`
    
    connection.query(sql, (error, results) => {
       if(error) {
        console.log(error);
       } 

       console.log(results);
    });
});


app.get("/produtos", () => {
    const sql = "SELECT * FROM products";

    connection.query(sql, (error, results) => {
        if(error) {
            console.log(error);
        }

        console.log(results);
    });
});

connection.connect((error) => {
    if(error) {
        console.log(error);
    }

    app.listen(3003, () => console.log("Servidor está sendo executado na porta 3003"));
});