import axios from "axios";

import {
    AUTH_PERSON_START,
    AUTH_PERSON_SUCCESS,
    AUTH_PERSON_FAILURE,
} from './types';

export const authPerson = (person, history) => {
    return dispatch => {
        dispatch({type: AUTH_PERSON_START});
        axios
            .post('http://localhost:5000/api/login', person.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                dispatch({type: AUTH_PERSON_SUCCESS, payload: person.credentials.username});
                history.push('/friends');
                console.log("this is history", history);
            })
            .catch(err => {
                dispatch({type: AUTH_PERSON_FAILURE, payload: err.response})
            })

    }
};

export const logout = () => {
    console.log('remove');
    localStorage.removeItem('token');
    return {type: 'LOGOUT'};
};
