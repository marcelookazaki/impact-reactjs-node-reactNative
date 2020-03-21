import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import {ContatoForm} from './formulario';

export class Contatos extends React.Component{
    render(){
        return(
            <div className="container">
                <Cabecalho titulo="Contatos" subtitulo="sub Contatos"/>
                <ContatoForm />
            </div>
        );
    }
}