import {connect} from "react-redux";
import {
    unfollow,
    follow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    toggleIsFetching, toggleFollowingInProgress, getUsers, following, unfollowing
} from "../../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";


class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
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
                    />}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsers,
    following,
    unfollowing,
})(UsersComponent);

export default UsersContainer;