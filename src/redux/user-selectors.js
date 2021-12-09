export const getUsers = (state) => {
    return state.usersPage.users;
}
export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount;
}
export const getUsersPageSize = (state) => {
    return state.usersPage.pageSize;
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