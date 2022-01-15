import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}
export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}
export const getUsersSuperSelector = createSelector(getUsers, (users)  => {
    return users.filter(u => true);
})
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount;
}
export const getUsersPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getUserPortionSize = (state) => {
    return state.usersPage.portionSize;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getUserIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getUserFollowingInProgress = (state) => {
    return  state.usersPage.followingInProgress;
}