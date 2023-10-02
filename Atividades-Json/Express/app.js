const express = require('express')
const app = express()
const port = 3003

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Página inicial")
});

app.listen(port, ()=>{
    console.log("Servidor rodando na porta 3000")
})