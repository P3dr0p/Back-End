const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type":"application/text"
    });

    if(request.url === "/produtos") {
        response.end(JSON.stringify(
            [
                {
                    id: 1,
                    name: "Produto 01",
                    description:"Algum produto",
                    price: 12.50                    
                },
                {
                    id: 2,
                    name: "Produto 02",
                    description:"Algum produto",
                    price: 12.50                    
                },
                {
                    id: 3,
                    name: "Produto 03",
                    description:"Algum produto",
                    price: 12.50                    
                },
                {
                    id: 4,
                    name: "Produto 04",
                    description:"Algum produto",
                    price: 12.50                    
                },
                {
                    id: 5,
                    name: "Produto 05",
                    description:"Algum produto",
                    price: 12.50                    
                }
            ]
        ));
    }

    if(request.url === "/usuarios"){
        response.end(JSON.stringify({
            message: "Acessando a rota de usuários"
        }));
    }

    response.end(JSON.stringify({
        message: "Criado um servidor com NodeJS"
    }));
}).listen(3000, () => console.log ("Servidor está sendo executado na porta 3000"));