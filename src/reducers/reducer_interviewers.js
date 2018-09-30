import _ from 'lodash';
import { FETCH_INTERVIEWERS } from '../actions';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_INTERVIEWERS:
		var res = action.payload.data;
		console.log(res); 
		return res.results;
		default:
			return state;
	}
}