
import 'whatwg-fetch';
import  { getToken } from './AuthService';


var config = require('../config.js');

export function request(endpoint, method, content, datatype, cb) {

    fetch(config.server_url+endpoint, {
        method: method,
        headers: {
            Authorization: 'Bearer ' + getToken()
        },
        body: content
    }).then((data) => {
        if (datatype === 'json') {
            return data.json();
        }
    }).then((data) => {
        cb(data.status, data.message, data.content);
    });
}

export function requestMultipart(endpoint, method, content, datatype, cb) {
    fetch(config.server_url+endpoint, {
        method: method,
        headers: {
            'authorization' : 'Bearer ' + getToken()
        },
        body: content
    }).then((data) => {
        if (datatype === 'json') {
            return data.json();
        }
    }).then((data) => {
        cb(data.status, data.message, data);
    });
}
