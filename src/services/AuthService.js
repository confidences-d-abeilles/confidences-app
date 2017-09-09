
import { redirect } from './RedirectService';


export function login(id, token, user_type) {
	localStorage.setItem('id', id);
	localStorage.setItem('token', token);
    localStorage.setItem('user_type', user_type);
}

export function logout() {
	localStorage.removeItem('token');
	localStorage.removeItem('id');
	localStorage.removeItem('user_type');
}

export function isLoggedIn(expected) {
    const token = localStorage.getItem('token');
    if (token) {
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

export function isAdmin() {
    return localStorage.getItem('admin');
}
