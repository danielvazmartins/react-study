import React, { Component } from 'react';
import AddTask from '.././components/AddTask';
import List from '.././components/List';

class App extends Component {
	render() {
		return(
			<div className="container">				
				<h1 className="page-header text-center">Lista de Tarefas</h1>
				<AddTask />
				<List />
			</div>
		);
	}
}

export default App;