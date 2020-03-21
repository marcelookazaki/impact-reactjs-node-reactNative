import { combineReducers } from 'redux';

import ContatoReducer from './contato';

const tabelas  =  combineReducers({
    contatos: ContatoReducer
})

export default tabelas;