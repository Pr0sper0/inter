import axios from 'axios';

export const FETCH_INTERVIEWERS = 'fetch_interviewers';

const ROOT_URL = 'https://randomuser.me/api';
const API_KEY = '?nat=gb&results=5';

export function fetchInterviewers() {
	const request = axios.get(`${ROOT_URL}/${API_KEY}`);
	return {
		type: FETCH_INTERVIEWERS,
		payload: request
	};
}