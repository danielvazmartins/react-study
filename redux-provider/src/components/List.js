import React, { Component } from 'react';
import Task from '.././components/Task';
import { connect } from 'react-redux';

class List extends Component {	
	render() {
		var taskItens = this.props.tasks.map((taskItem, index) => {
			return(
				<Task key={index} >{taskItem.name.value}</Task>
			);
		});

		return(
			<ul className="list-group">
				{taskItens}
			</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
}

export default connect(mapStateToProps)(List);