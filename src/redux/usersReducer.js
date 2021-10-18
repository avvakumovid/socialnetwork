const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 1,
    currentPage: 1,
    isFetching: false
};

const userReducer = (state = initialState, action) => {

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
        case TOGGLE_IS_FETCHING: return {
            ...state,
            isFetching: action.isFetching
        }
        default:
            let copyState = {...state}
            return state;
    }
}

export default userReducer;