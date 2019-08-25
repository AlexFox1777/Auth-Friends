import {
    AUTH_PERSON_START,
    AUTH_PERSON_SUCCESS,
    AUTH_PERSON_FAILURE,
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE,
    CHANGE_FRIEND_START,
    CHANGE_FRIEND_SUCCESS,
    CHANGE_FRIEND_FAILURE,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE
} from "../actions";


const initialState = {
    user: {
        username: "",
    },
    isAuth: !!localStorage.getItem('token'),
    isLoading: false,
    error: "",
    friends: [],
};

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_PERSON_START:
            return {...state, error: "",};
        case AUTH_PERSON_SUCCESS:
            return {...state, error: "", user: {...state.user, username: payload}, isAuth: true};
        case AUTH_PERSON_FAILURE:
            return {...state, error: payload};


        case "LOGOUT":
            return {...state, error: "", isAuth: false};

        case GET_FRIENDS_START:
            return {...state, error: "",};
        case GET_FRIENDS_SUCCESS:
            return {...state, error: "", isAuth: true, friends: payload};
        case GET_FRIENDS_FAILURE:
            return {...state, error: payload.data.error};


        case CHANGE_FRIEND_START:
            return {...state, error: "",};
        case CHANGE_FRIEND_SUCCESS:
            return {...state, error: "", friends: [...state.friends, payload]};
        case CHANGE_FRIEND_FAILURE:
            return {...state, error: payload.data.error};

        case DELETE_FRIEND_START:
            return {...state, error: "",};
        case DELETE_FRIEND_SUCCESS:
            return {...state, error: "", friends: payload };
        case DELETE_FRIEND_FAILURE:
            return {...state, error: payload.data.error};

        default:
            return state;
    }
};