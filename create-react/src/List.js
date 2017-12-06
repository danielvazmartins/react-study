import React, { Component } from 'react';
import ListItem from './ListItem';
import axios from 'axios';

class List extends Component {

    constructor(props) {
	    super(props);
	    this.state = {
	      	notifications: [],
	    };
	}

	componentDidMount() {
    	axios.get('http://localhost:3001/api/notifications')
		.then(response => {
			this.setState({
				notifications: response.data
			});
		});
	}

	render() {
		var noteItem = this.state.notifications.map(function(notification){
            return (
            	<ListItem key={notification.id} id={notification.id} href={notification.url} src={notification.image}>{notification.title}</ListItem>
            );
        });

		return (
			<ul className="list-group">          
		  		{noteItem}
			</ul>
		);
	}
}

export default List;