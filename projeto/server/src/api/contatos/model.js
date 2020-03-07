//criando o schema
const restful = require('node-restful');
const { Schema } = restful.mongoose; //referência ao mongoose do restful

const contatosSchema = new Schema({
    data: { type: Date, required: true },
    nome: { type: String, required: true },
    email: {type: String , required: true},
    assunto: { type: String, required: true }
});

module.exports = restful.model('contatos', contatosSchema);