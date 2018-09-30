import axios from 'axios';

export const FETCH_INTERVIEWERS = 'fetch_interviewers';
export const MOVE_RIGHT = "move_right";
export const MOVE_LEFT = "move_left";

const ROOT_URL = 'https://randomuser.me/api';
const API_KEY = '?nat=gb&results=5';

export function fetchInterviewers() {
	const request = axios.get(`${ROOT_URL}/${API_KEY}`);
	return {
		type: FETCH_INTERVIEWERS,
		payload: request
	};
}

export function goRight(item) {
	return {
		type: MOVE_RIGHT,
		payload: item
	}
}

export function goLeft(item) {
	return {
		type: MOVE_LEFT,
		payload: item
	}
}