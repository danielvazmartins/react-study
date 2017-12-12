import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksActions from '.././actions/TasksActions';

class AddTask extends Component {
	constructor(props) {
		super(props)

		this.handleNewTask = this.handleNewTask.bind(this)
	}

	handleNewTask() {
		this.props.newTask(this.refs.item.value);
		this.refs.item.value = '';
	}

	render() {		
		return(
			<div className="form-group">
                <label>Incluir novo item</label>
                <div className="input-group">
                    <input type="text" className="form-control" ref="item" />
                    <span className="input-group-btn">
                        <a className="btn btn-primary" onClick={ this.handleNewTask }>Salvar</a>
                    </span>
                </div>
            </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
}

const mapDispatchToProps = (dispatch) => {
	return {		
		newTask: (value) => dispatch(TasksActions.newTask(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);