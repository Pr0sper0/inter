import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'https://randomuser.me/api/';
const API_KEY = '?nat=gb&results=5';

export function fetchInterviewer() {
	const request = axios.get(`${ROOT_URL}/${API_KEY}`);
	return {
		type: FETCH_Interviewers,
		payload: request
	};
}