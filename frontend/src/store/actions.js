import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/dj-rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            dispatch(authSuccess(token));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/dj-rest-auth/registration/', {
            username,
            email,
            password1,
            password2
        })
        .then(res => {
            const token = res.data.key;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            dispatch(authSuccess(token));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

