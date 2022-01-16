import React from 'react';
import {connect} from 'react-redux';
import {
    unfollow,
    follow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    toggleIsFetching, toggleFollowingInProgress, requestUsers, following, unfollowing
} from '../../../redux/usersReducer';

import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getTotalUserCount,
    getUserFollowingInProgress,
    getUserIsFetching,
    getUsersPageSize,
    getUsers,
    getUserPortionSize
} from '../../../redux/user-selectors';


class UsersComponent extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUserCount={this.props.totalUserCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           onPageChanged={this.onPageChanged}
                                                           users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           followingInProgress={this.props.followingInProgress}
            />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        // users: getUsers(state),
        users: getUsers(state),
        totalUserCount: getTotalUserCount(state),
        pageSize: getUsersPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getUserIsFetching(state),
        followingInProgress: getUserFollowingInProgress(state),
        portionSize: getUserPortionSize(state)

    }
}


export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsers: requestUsers,
    following,
    unfollowing,
}))(UsersComponent);