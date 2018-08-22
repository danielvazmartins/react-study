import React, { Component } from 'react'
import InputCustomizado from './componentes/InputCustomizado';
import SubmitCustomizado from './componentes/SubmitCustomizado';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros';

export class FormularioLivro extends Component {

    constructor() {
        super()
        this.state = {
          titulo: '',
          preco: '',
          autorId: ''
        }
        this.enviaForm = this.enviaForm.bind(this)
        this.setTitulo = this.setTitulo.bind(this)
        this.setPreco = this.setPreco.bind(this)
        this.setAutorId = this.setAutorId.bind(this)
    }

    setTitulo(e) {
        this.setState({titulo: e.target.value})
      }
    
      setPreco(e) {
        this.setState({preco: e.target.value})
      }
    
      setAutorId(e) {
        this.setState({autorId: e.target.value})
      }
    
      enviaForm(e) {
        e.preventDefault()
        
        $.ajax({
          type: 'post',
          url: 'https://cdc-react.herokuapp.com/api/livros',
          dataType: 'json', // Tipo de dados do retorno
          contentType: 'application/json', // Tipo de dados do envia
          data: JSON.stringify({
            titulo: this.state.titulo,
            preco: this.state.preco,
            autorId: this.state.autorId
          }),
          success: function(data) {
              PubSub.publish('atualiza-lista-livros', data)
              this.setState({titulo:'', preco:'', autorId:''})
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
                    <InputCustomizado id="titulo" name="titulo" type="text" label="Titulo" value={this.state.titulo} onChange={this.setTitulo}></InputCustomizado>
                    <InputCustomizado id="preco" name="preco" type="text" label="Preco" value={this.state.preco} onChange={this.setPreco}></InputCustomizado>
                    <div className="pure-control-group">
                        <label htmlFor="autorId">Autor</label> 
                        <select id="autorId" name="autorId" value={this.state.autorId} onChange={this.setAutorId}>
                            <option value="">Seleciona um autor</option>
                            {
                                this.props.autores.map(function(autor) {
                                    return <option key={autor.id} value={autor.id}>{autor.nome}</option>
                                })
                            }
                        </select>
                        <span className="error">{this.state.msgErro}</span>
                    </div>
                    <SubmitCustomizado label="Gravar"></SubmitCustomizado>
                </form>             
            </div> 
        )
    }
}

export class TabelaLivros extends Component {
    render() {
        return(
            <div>            
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Preco</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.lista.map((livro, index) => {
                                return (
                                    <tr key={livro.id}>
                                        <td>{livro.titulo}</td>
                                        <td>{livro.preco}</td>
                                        <td>{livro.autor.nome}</td>
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

export default class LivroBox extends Component {
    constructor() {
        super()
        this.state = {
          lista: [],
          autores: []
        }
      }
    
      componentDidMount() {
        $.ajax({
          type: 'GET',
          url: 'https://cdc-react.herokuapp.com/api/livros',
          dateType: 'json',
          success: function(data) {
            this.setState({
              lista: data
            })
          }.bind(this)
        })

        $.ajax({
            type: 'GET',
            url: 'https://cdc-react.herokuapp.com/api/autores',
            dateType: 'json',
            success: function(data) {
              this.setState({
                autores: data
              })
            }.bind(this)
          })

        PubSub.subscribe('atualiza-lista-livros', function(topico, novaLista) {
            this.setState({ lista: novaLista })
        }.bind(this))
      }

    render() {
        return(
            <div>
                <div className="header">
                    <h1>Cadastro de livros</h1>
                </div>
                <div className="content" id="content">                            
                    <FormularioLivro autores={this.state.autores}/>
                    <TabelaLivros lista={this.state.lista}/>        
                </div>
            </div>
        )
    }
}