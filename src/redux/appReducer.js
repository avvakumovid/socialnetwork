import {auth} from "./authReducer";

const INIZIALIZED_SUCCESS = 'INIZIALIZED_SUCCESS';

let initialState = {
    itnitalize: false
}

let appReducer = (state = initialState, action) => {

    switch (action.type){
        case INIZIALIZED_SUCCESS:
            return {
                ...state,
                itnitalize: true
                //isAuth: true,
            }
        default :{
            return state;
        }
    }
}

export const itnitalizedSuccess = () => ({type: INIZIALIZED_SUCCESS});
export const itnitalizeApp = () => {
    return (dispatch) => {
        let promise = dispatch(auth())
        Promise.all([promise]).then(() => {
            dispatch(itnitalizedSuccess())
        })
    }
}

export default appReducer;