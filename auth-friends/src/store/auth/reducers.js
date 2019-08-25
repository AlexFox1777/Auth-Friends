import {
    AUTH_PERSON_START,
    AUTH_PERSON_SUCCESS,
    AUTH_PERSON_FAILURE,
    LOGOUT,
} from "./types";


const initialState = {
    user: {
        username: "",
    },
    isAuth: !!localStorage.getItem('token'),
    isLoading: false,
    errors: "",
};

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_PERSON_START:
            return {...state, errors: "",};
        case AUTH_PERSON_SUCCESS:
            return {...state, errors: "", user: {...state.user, username: payload}, isAuth: true};
        case AUTH_PERSON_FAILURE:
            return {...state, errors: payload};


        case LOGOUT:
            return {...state, errors: "", isAuth: false};


        default:
            return state;
    }
};