const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 1,
    currentPage: 1
};

const sidebarReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        u.followed = true;
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        u.followed = false;
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_USERS_TOTAL_COUNT: return {
            ...state,
            totalUserCount: action.count,
        }
        case SET_CURRENT_PAGE: return {
            ...state,
            currentPage: action.page
        }
        default:
            let copyState = {...state}
            return state;
    }
}

export default sidebarReducer;