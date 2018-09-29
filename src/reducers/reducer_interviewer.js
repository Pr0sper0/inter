import _ from 'lodash';
import { FETCH_INTERVIEWERS } from '../actions';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_INTERVIEWERS:
		//console.log(action.payload.data); // [ interviewer1, interviewer2 ]
		return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}