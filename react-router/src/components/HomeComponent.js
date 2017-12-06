import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {
	render() {
		return (
			<div>
				<div className="row text-center"> 
		          <h1>React Router DOM</h1>
		        </div>
		        <ul className="list-group">          
		          	<li className="list-group-item">
		          		<Link to="/item1" className="btn btn-link">Item 1</Link>
		          	</li>
		          	<li className="list-group-item">
		          		<button type="button" className="btn btn-link" onClick={ () => this.props.history.push('/item2') }>Item 2</button>
		          	</li>
		          	<li className="list-group-item">
		          		<button type="button" className="btn btn-link" onClick={ () => this.props.history.push('/item3', {param: 'valor por parâmetro'}) }>Item 3</button>
		          	</li>
		          	<li className="list-group-item">
		          		<a href="/item4" className="btn btn-link">Item 4</a>
		          	</li>
		        </ul>
		    </div>
		);
	}
}

export default HomeComponent;