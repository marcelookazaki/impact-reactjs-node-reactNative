import React from 'react';
import axios from 'axios';

import { FormularioCurso } from './formulario';
import { ListaCursos } from './lista';
import Axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class CadastroCursos extends React.Component{

    estadoInicial = {
        cursos :[],
        codigo : '',
        descricao : '',
        cargaHoraria: '',
        preco: '',
        categoria: ''
    }

    state = this.estadoInicial

    componentDidMount(){
        axios.get(URL)
        .then(response => {
            this.setState({...this.state, cursos: response.data })
        })
        .catch(error => {
            console.log(error)
        });
    }

    atualizaCodigo = (e) => {
        this.setState({...this.state, codigo: e.target.value})
    }

    atualizaDescricao = (e) => {
        this.setState({...this.state, descricao: e.target.value})
    }

    atualizaCargaHoraria = (e) => {
        this.setState({...this.state, cargaHoraria: e.target.value})
    }

    atualizaPreco = (e) => {
        this.setState({...this.state, preco: e.target.value})
    }

    atualizaCategoria = (e) => {
        this.setState({...this.state, categoria: e.target.value})
    }

    render(){
        
        return(
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormularioCurso 
                        codigo={this.state.codigo}
                        descricao={this.state.descricao}
                        cargaHoraria={this.state.cargaHoraria}
                        preco={this.state.preco}
                        categoria={this.state.categoria}

                        atualizaCodigo = {this.atualizaCodigo}
                        atualizaDescricao = {this.atualizaDescricao}
                        atualizaCargaHoraria = {this.atualizaCargaHoraria}
                        atualizaPreco = {this.atualizaPreco}
                        atualizaCategoria = {this.atualizaCategoria}
                    />
                </div>
                <div className="col-md-6">
                    <ListaCursos cursos={this.state.cursos}/>
                </div>
            </div>
        )
    }
    
}