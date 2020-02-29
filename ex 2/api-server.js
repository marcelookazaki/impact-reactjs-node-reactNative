const http = require('http');
const requisicao = function(request, reponse){
    reponse.writeHead(200, { "Content-Type": "text/html" });
    reponse.write("<h1>Texto Teste</h1>");
    reponse.end();
}

const server = http.createServer(requisicao);

const callback = function(){
    console.log('Servidor ok');
}

server.listen(3000, callback);