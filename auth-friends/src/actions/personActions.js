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
                console.log("this is history",history);
            })
            .catch(err => dispatch({type: AUTH_PERSON_FAILURE, payload: err.response}))

    }
};


export const getFriends = () =>{
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


