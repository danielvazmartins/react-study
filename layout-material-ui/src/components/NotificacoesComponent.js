import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { pinkA200 } from 'material-ui/styles/colors';
import axios from 'axios';

class NotificacoesComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			notes: [{
				name: 'name1',
				email: 'email1'
			}]
		}
	}

	componentDidMount() {
		this.getItens();
	}

	getItens = () => {
	    axios.get('https://jsonplaceholder.typicode.com/users')
	    .then((response) => {        
	        var newNotes = response.data.map((user) => {
	        	return {
	        		name: user.name,
	        		email: user.email
	        	}
	        });
	        this.setState({
	        	notes: newNotes
	        });
	    });
	}

	render() {		
		return (
			<div>
				<HeaderComponent />
				<div className="pageContent">
					<h1>Notificações</h1>
					<List>						
						{this.state.notes.map((note, id) => {
							return(
								<ListItem 
									key={id}
									leftIcon={<ActionGrade color={pinkA200} />}
									primaryText={note.name}
									secondaryText={note.email} />
							)
						})}
					</List>
				</div>		       
			</div>	       
		);
	}
}

export default NotificacoesComponent;