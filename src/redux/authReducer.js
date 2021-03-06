import {AuthAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                //isAuth: true,
            }
        default : {
            return state;
        }
    }
}

export const setUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, login, email, isAuth}
});
export const auth = () =>
    async (dispatch) => {
        let response = await AuthAPI.authMe()
        if (response.resultCode === 0) {
            dispatch(setUserData(response.data.id, response.data.login, response.data.email, true));
        }
    }
export const login = (email, password, rememberMe) => {

    return async (dispatch) => {

        let response = await AuthAPI.login(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(auth());
        } else {
            let message = response.messages.length > 0 ? response.messages : 'some error'
            let action = stopSubmit('login', {_error: message})
            dispatch(action)
        }


    }
}

export const logout = () => {

    return async (dispatch) => {
        let response = await AuthAPI.logout()
        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, false));
        }


    }
}
export default authReducer;