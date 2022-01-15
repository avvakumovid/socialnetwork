import {connect} from "react-redux";
import {
    unfollow,
    follow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    toggleIsFetching, toggleFollowingInProgress, requestUsers, following, unfollowing
} from "../../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getTotalUserCount,
    getUserFollowingInProgress,
    getUserIsFetching,
    getUsersPageSize,
    getUsers, getUsersSuperSelector,
    getUserPortionSize
} from "../../../redux/user-selectors";


class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (page) => {
        this.props.requestUsers(page, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }


    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Users
                           totalUserCount={this.props.totalUserCount}
                           pageSize={this.props.pageSize}
                           setCurrentPage={this.setCurrentPage}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           // unfollow={this.props.unfollow}
                           // follow={this.props.follow}
                           // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                            followingInProgress={this.props.followingInProgress}
                           following={this.props.following}
                           unfollowing={this.props.unfollowing}
                           portionSize={this.props.portionSize}
                           onPageChanged={this.onPageChanged}
                    />}
            </div>
        )

    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         totalUserCount: state.usersPage.totalUserCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//
//     }
// }
const mapStateToProps = (state) => {
    return {
        // users: getUsers(state),
        users: getUsersSuperSelector(state),
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
    requestUsers,
    following,
    unfollowing,
}))(UsersComponent);