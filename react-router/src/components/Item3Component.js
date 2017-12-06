import React, { Component } from 'react';

class Item3Component extends Component {	
	render() {
		console.log(this.props.history.location.state);
		return (
			<div>
				<div className="row text-center"> 
		          <h1>Item 3</h1>
		        </div>
		    </div>
		);
	}
}

export default Item3Component;