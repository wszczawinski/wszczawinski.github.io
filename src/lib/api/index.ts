import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://blog-api.ohdeerit.com/api/v1',
	headers: {
		'Content-Type': 'application/json'
	}
});
