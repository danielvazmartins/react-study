import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './index.css';

ReactDOM.render(
  	<div className="container">
  		<div className="row text-center">	
			<h1>React</h1>
		</div>
  		<List /> 		
  	</div>,
  	document.getElementById('root')
);
