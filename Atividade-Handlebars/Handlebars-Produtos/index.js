const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3001
const mysql = require('mysql2')
const handlebars = require('express-handlebars')

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: true}))

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.json());

const produtos = []

const db = mysql.createPool({
    host: 'localhost',
    user: 'aluno_medio',
    password: '@lunoSenai23.',
    database: 'system_products'
})

app.post("/cadastrar", (req, res) => {
    const { name, description, price } = req.body
    
    const inserirMysql = `INSERT INTO products(name, description, price) VALUES ('${name}', '${description}', '${price}')`

    db.query(inserirMysql, (error) => {
        if(error){
            console.error(error)
            return res.status(500).json({error: "Erro ao inserir dados"})
        }
        
        return res.redirect('/.')
    });
});

app.get("/", (req, res) => {
    res.render('formulario')
});

app.listen(port, (error) => {
    if(error){
        console.log("deu erro")
        return
    }
    console.log(`Servidor rodando na porta ${port}`)
})