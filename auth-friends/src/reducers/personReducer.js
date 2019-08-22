import {
    AUTH_PERSON_START,
    AUTH_PERSON_SUCCESS,
    AUTH_PERSON_FAILURE,
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE
} from "../actions";


const initialState = {
    username: '',
    friends: [],
    error: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_PERSON_START:
            return {...state, error: "",};
        case AUTH_PERSON_SUCCESS:
            return {...state, error: "", username: action.payload};
        case AUTH_PERSON_FAILURE:
            return {...state, error: action.payload};

        case GET_FRIENDS_START:
            return {...state, error: "",};
        case GET_FRIENDS_SUCCESS:
            return {...state, error: "", friends: action.payload};
        case GET_FRIENDS_FAILURE:
            return {...state, error: action.payload.data.error};

        default:
            return state;
    }
};