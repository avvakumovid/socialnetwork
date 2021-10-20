import {connect} from "react-redux";
import {
    unfollow,
    follow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    toggleIsFetching, toggleFollowingInProgress
} from "../../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {UsersAPI} from "../../../API/API";


class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setCurrentPage(1)
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items);
            this.props.setTotalUserCount(response.totalCount)
        })
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(page, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items);
            //  this.props.setTotalUserCount(response.data.totalUserCount)
        })
    }


    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> :
                    <Users totalUserCount={this.props.totalUserCount}
                           pageSize={this.props.pageSize}
                           setCurrentPage={this.setCurrentPage}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           unfollow={this.props.unfollow}
                           follow={this.props.follow}
                           toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                           followingInProgress={this.props.followingInProgress}
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
    toggleFollowingInProgress
})(UsersComponent);

export default UsersContainer;