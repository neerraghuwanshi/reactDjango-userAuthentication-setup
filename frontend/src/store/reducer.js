import * as actionTypes from './actionTypes';
import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    token: null,
    error: null, 
    loading: false
}

const authStart = (state) => {
    return {
        ...state,
        error: null,
        loading: true
    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        error: null,
        loading: false
    }
}

const authFail = (state, action) => {
    return {
        ...state, 
        error: action.error,
        loading: false
    }
}

const authLogout = state => {
    return {
        ...state, 
        token: null,
        loading:true,
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state);
        case actionTypes.AUTH_SUCCESS: 
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: 
            return authLogout(state);
        default:
            return state;
    }
}


export const store = createStore(reducer,composeEnhances(
    applyMiddleware(thunk)
));

export default reducer;