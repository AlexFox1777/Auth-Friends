import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";

//authPerson
export const AUTH_PERSON_START = 'AUTH_PERSON_START';
export const AUTH_PERSON_SUCCESS = 'AUTH_PERSON_SUCCESS';
export const AUTH_PERSON_FAILURE = 'AUTH_PERSON_FAILURE';
//getFriends
export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

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


export const getFriends = () => {
    return dispatch => {
        dispatch({type: GET_FRIENDS_START});
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                dispatch({type: GET_FRIENDS_SUCCESS, payload: res.data});
            })
            .catch(err => dispatch({type: GET_FRIENDS_FAILURE, payload: err.response}));
    }
};


export const CHANGE_FRIEND_START = 'CHANGE_FRIEND_START';
export const CHANGE_FRIEND_SUCCESS = 'CHANGE_FRIEND_SUCCESS';
export const CHANGE_FRIEND_FAILURE = 'CHANGE_FRIEND_FAILURE';

export const goToFriend = (id, friend) => {
    return dispatch => {
        dispatch({type: CHANGE_FRIEND_START});
        axiosWithAuth()
            .put(`http://localhost:5000/api/friends/${id}`, friend)
            .then(res => {
                dispatch({type: CHANGE_FRIEND_SUCCESS, payload: res.data});
            })
            .catch(err => dispatch({type: CHANGE_FRIEND_FAILURE, payload: err.response}));
    }
};

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const deleteFriend = (id) => {
    return dispatch => {
        dispatch({type: DELETE_FRIEND_START});
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => {
                console.log(res.data);
                dispatch({type: DELETE_FRIEND_SUCCESS, payload: res.data});
            })
            .catch(err => dispatch({type: DELETE_FRIEND_FAILURE, payload: err.response}));
    }
};
