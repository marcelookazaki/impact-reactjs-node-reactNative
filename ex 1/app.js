const m1 = require('./mod1.js');
// const m2 = require('./mod2.js/index.js');
const { mensagem } = require('./mod2.js');

m1('entrou no m1');
// m2.mensagem('entrou no m2');
mensagem('teste chamando apenas a function na classe');