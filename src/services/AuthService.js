
import { client } from './Net';
import ReactGA from 'react-ga';


export function login(id, token, user_type) {
	localStorage.setItem('id', id);
	localStorage.setItem('token', token);
    localStorage.setItem('user_type', user_type);
	client.defaults.headers.common['Authorization'] = 'Bearer '+token;
	if (user_type === 4) {
		ReactGA.ga('set', 'dimension1', 1);
	}
	return true;
}

export function logout() {
	localStorage.removeItem('token');
	localStorage.removeItem('id');
	localStorage.removeItem('user_type');
	ReactGA.ga('set', 'dimension1', 0);
}

export function isLoggedIn(expected) {
    const token = localStorage.getItem('token');
    if (token) {
		client.defaults.headers.common['Authorization'] = 'Bearer '+token;
        return true;
    } else {
        return false;
    }
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getId() {
    return localStorage.getItem('id');
}

export function getUserType() {
	return localStorage.getItem('user_type');
}
