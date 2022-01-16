import {createSelector} from 'reselect';

export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})


export const getTotalUserCountSelector = (state) => {
    return state.usersPage.totalUserCount;
}

export const getTotalUserCount = createSelector(getTotalUserCountSelector, (totalUserCount) => {
    return totalUserCount
})
export const getUsersPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}

export const getUsersPageSize = createSelector(getUsersPageSizeSelector, (pageSize) => {
    return pageSize
})

export const getUserPortionSizeSelector = (state) => {
    return state.usersPage.portionSize;
}

export const getUserPortionSize = createSelector(getUserPortionSizeSelector, (portionSize) => {
    return portionSize
})

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage
})

export const getUserIsFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}

export const getUserIsFetching = createSelector(getUserIsFetchingSelector, (isFetching) => {
    return isFetching
})

export const getUserFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress;
}

export const getUserFollowingInProgress = createSelector(getUserFollowingInProgressSelector, (followingInProgress) => {
    return followingInProgress
})