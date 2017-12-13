import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import ListaProdutosComponent from './components/ListaProdutosComponent';
import NotificacoesComponent from './components/NotificacoesComponent';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            	<Router>
		          	<div>
		            	<Route exact path="/" component={HomeComponent} ></Route>
		            	<Route exact path="/produtos" component={ListaProdutosComponent} ></Route>
		            	<Route exact path="/notificacoes" component={NotificacoesComponent} ></Route>
		          	</div>
		        </Router>         	
            </MuiThemeProvider>
        );
    }
}

export default App;
