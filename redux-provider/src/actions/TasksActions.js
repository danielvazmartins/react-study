import * as ActionTypes from './ActionTypes';

const newTask = (value) => {
	return {
		type: ActionTypes.NEW_TASK,
		payload: {
			value
		}
	}
}

export default { 
	newTask 
}