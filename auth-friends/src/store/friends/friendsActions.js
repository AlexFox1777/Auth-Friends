import {axiosWithAuth} from "../../utils/axiosWithAuth";

import {
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE,
    CHANGE_FRIEND_START,
    CHANGE_FRIEND_SUCCESS,
    CHANGE_FRIEND_FAILURE,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE
} from "./types";


//GetAllFriends

export const getFriends = () => {
    return dispatch => {
        dispatch({type: GET_FRIENDS_START});
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log("get friends", res.data);
                dispatch({type: GET_FRIENDS_SUCCESS, payload: res.data});
            })
            .catch(err => dispatch({type: GET_FRIENDS_FAILURE, payload: err.response}));
    }
};

//Change Friend

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

//Delete Friend

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
