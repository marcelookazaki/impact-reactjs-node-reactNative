//Arquivo responsavel por configurar o servidor node/express

//defindo o numero da porta
const port = 3200;
//middlewares - singletons: commons js
const bodyParser = require('body-parser');
const express = require('express');
const server = express(); //novo servidor

const allowCors = require('./config/cors');

//para toda requisição que chegar, use o bodyparser para
//interpretar chegadas no formato urlencoded
server.use(bodyParser.urlencoded({ extended: true }))
//considera o formato json no corpo da requisição
server.use(bodyParser.json());

server.use(allowCors);

server.listen(port, function () {
 //template string (observe a crase)
 console.log(`servidor no ar, na porta ${port}`);
});

module.exports = server;