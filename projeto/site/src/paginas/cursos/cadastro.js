import React from 'react';
import axios from 'axios';

import { FormularioCurso } from './formulario';
import { ListaCursos } from './lista';
import Axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export class CadastroCursos extends React.Component{

    estadoInicial = {
        _id: '',
        codigo : '',
        descricao : '',
        cargaHoraria: '',
        preco: '',
        categoria: ''
    }

    state = this.estadoInicial;

    componentDidMount(){
        this.listarCursos();
      }

    listarCursos(){
          Axios.get(URL)
          .then(response => {
            this.setState({ ...this.state, cursos: response.data })
          }).catch(error => {
            console.log(error)
          })
    
    }

    limparForm(evento){
        if(evento){
            evento.preventDefault();
        }
        this.setState(this.estadoInicial);
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

    adicionarCurso  = async(evento) => {
        if(evento){
            evento.preventDefault();
        }

        const {_id, codigo, descricao, cargaHoraria, preco, categoria} = this.state;
  
        if(codigo == '' || descricao == '' || cargaHoraria < 2 || preco == ''){
            alert('Erro ao cadastrar');
            return
        }
        
        const body  = {codigo, descricao, cargaHoraria, preco, categoria};

        try{
            let msg = '';

            if(_id === ''){
                await axios.post(URL, body);
                msg = 'Curso salvo com sucesso';
            }else{
                await axios.put(URL+"/"+_id, body);
                msg = 'Curso atualizado com sucesso';
            }

            this.limparForm();
            this.listarCursos();

            alert(msg);
            
        }catch(error){
            console.log(error);
        }
    }

    editarCurso(curso){
        this.setState({...this.state,
            _id: curso._id,
            codigo : curso.codigo,
            descricao : curso.descricao,
            cargaHoraria : curso.cargaHoraria,
            preco : curso.preco,
            categoria : curso.categoria
        })
    }

    removerCurso(id){
        if(window.confirm("Deseja excluir curso ?!")){  
            axios.delete(URL+'/'+id)
            .then(_ => {
                this.listarCursos();
                alert('Curso removido com sucesso !');
            })
            .catch(error => console.log(error))
        }
    }

    render(){
        
        return(
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormularioCurso 
                        _id={this.state._id}
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

                        adicionarCurso={this.adicionarCurso.bind(this)}
                        limparForm={this.limparForm.bind(this)}

                    />
                </div>
                <div className="col-md-6">
                    <ListaCursos
                        cursos={this.state.cursos}
                        removerCurso={this.removerCurso.bind(this)}
                        editarCurso={this.editarCurso.bind(this)}

                    />
                </div>
            </div>
        )
    }
    
}