import * as ActionTypes from '.././actions/ActionTypes';

export default (state = [], action) => {
	switch(action.type) {
		case ActionTypes.NEW_TASK:
			var newTask = {
				name: action.payload
			}
			return state.concat([newTask]);
		default:
			return state;
	}
}