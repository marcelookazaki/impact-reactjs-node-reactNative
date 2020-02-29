const express = require('express');
module.exports = function (server) {
 //definir a URL base para todas as rotas
 const router = express.Router();
 server.use('/api', router);
 //rotas relacionadas às operações com cursos e contatos
 const Cursos = require('../api/cursos/cursosService');
 const Contatos = require('../api/contatos/contatosService');
 Cursos.register(router, '/cursos');
 Contatos.register(router, '/contatos');
};