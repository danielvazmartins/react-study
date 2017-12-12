import React, { Component } from 'react';
import { connect } from 'react-redux';

class Task extends Component {
	render() {
		return(
			<li className="list-group-item">{this.props.children}</li>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
}

export default connect(mapStateToProps)(Task);