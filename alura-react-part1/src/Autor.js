import React, { Component } from 'react'
import InputCustomizado from './componentes/InputCustomizado';
import SubmitCustomizado from './componentes/SubmitCustomizado';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros';

export class FormularioAutor extends Component {

    constructor() {
        super()
        this.state = {
          nome: '',
          email: '',
          senha: ''
        }
        this.enviaForm = this.enviaForm.bind(this)
    }

    salvaAlteracao(nomeInput, evento) {
        var campoSendoAlterado = {};
        campoSendoAlterado[nomeInput] = evento.target.value;    
        this.setState(campoSendoAlterado);
    }
    
      enviaForm(e) {
        e.preventDefault()
        
        $.ajax({
          type: 'post',
          url: 'https://cdc-react.herokuapp.com/api/autores',
          dataType: 'json', // Tipo de dados do retorno
          contentType: 'application/json', // Tipo de dados do envia
          data: JSON.stringify({
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
          }),
          success: function(data) {
              PubSub.publish('atualiza-lista', data)
              this.setState({nome:'', email:'', senha:''})
          }.bind(this),
          error: function(error) {
            if(error.status === 400) {
                new TratadorErros().publicaErros(error.responseJSON);
            }
          },
          beforeSend: function(){
            PubSub.publish("limpa-erros",{});
          }
        })
    }

    render() {
        return(
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm}>
                    <InputCustomizado id="nome" name="nome" type="text" label="Nome" value={this.state.nome} onChange={this.salvaAlteracao.bind(this,'nome')}></InputCustomizado>
                    <InputCustomizado id="email" name="email" type="email" label="E-mail" value={this.state.email} onChange={this.salvaAlteracao.bind(this, 'email')}></InputCustomizado>
                    <InputCustomizado id="senha" name="senha" type="password" label="Senha" value={this.state.senha} onChange={this.salvaAlteracao.bind(this, 'senha')}></InputCustomizado>
                    <SubmitCustomizado label="Gravar"></SubmitCustomizado>
                </form>             
            </div> 
        )
    }
}

export class TabelaAutores extends Component {
    render() {
        return(
            <div>            
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.lista.map((author, index) => {
                                return (
                                    <tr key={author.id}>
                                        <td>{author.nome}</td>
                                        <td>{author.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> 
            </div>
        )
    }
}

export default class AutorBox extends Component {
    constructor() {
        super()
        this.state = {
          lista: []
        }
      }
    
      componentDidMount() {
        $.ajax({
          type: 'GET',
          url: 'https://cdc-react.herokuapp.com/api/autores',
          dateType: 'json',
          success: function(data) {
            this.setState({
              lista: data
            })
          }.bind(this)
        })

        PubSub.subscribe('atualiza-lista', function(topico, novaLista) {
            this.setState({ lista: novaLista })
        }.bind(this))
      }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Cadastro de autores</h1>
                </div>
                <div className="content" id="content">                            
                    <FormularioAutor/>
                    <TabelaAutores lista={this.state.lista}/>        
                </div>
            </div>
        )
    }
}