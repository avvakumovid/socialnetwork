import {SubscribeAPI, UsersAPI} from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    portionSize: 10,
    totalUserCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.count,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] :
                    [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            // let copyState = {...state}
            return state;
    }
}

export default userReducer;

export const follow = (userid) => ({type: FOLLOW, userid});
export const unfollow = (userid) => ({type: UNFOLLOW, userid});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUserCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingInProgress: isFetching,
    userId
})

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let response = await UsersAPI.requestUser(currentPage, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUserCount(response.totalCount))


    }
}

let followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator, flag) => {
    dispatch(toggleFollowingInProgress(flag, id))
    let response = await apiMethod(id);

    if (response.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingInProgress(false, id))
}

export const following = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, SubscribeAPI.follow.bind(SubscribeAPI), follow, true)
    }
}

export const unfollowing = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, SubscribeAPI.unfollow.bind(SubscribeAPI), unfollow, false)
    }
}