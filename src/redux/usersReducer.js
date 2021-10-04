const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        ]
};

const sidebarReducer = (state = initialState, action) => {
    debugger;
    switch (action.type){

        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userid) {
                        u.followed = true;
                    }
                    return u;
                })
            }
            case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userid) {
                        u.followed = false;
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            let copyState = {...state}
            return state;
    }
}

export default sidebarReducer;