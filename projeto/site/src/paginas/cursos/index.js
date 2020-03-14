import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import { CadastroCursos } from './cadastro';

export class Cursos extends React.Component{
    render(){
        return(
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo=" sub Cursos"/>
                <CadastroCursos />
            </div>
        );
    }
}