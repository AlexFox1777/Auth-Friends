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


const initialState = {
    isLoading: false,
    errors: null,
    friends: [],
};

export const friendsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_FRIENDS_START:
            return {...state, error: "",};
        case GET_FRIENDS_SUCCESS:
            return {...state, error: "", friends: payload};
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