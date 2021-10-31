import {AuthAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default :{
                return state;
            }
    }
}

export const setUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}});
export const auth = () => {
    return (dispatch) => {
            AuthAPI.authMe().then((response) => {

            if(response.resultCode===0){
               dispatch(setUserData(response.data.id, response.data.login, response.data.email));
            }

        })
    }
}
export default authReducer;