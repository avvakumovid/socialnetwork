import {connect} from "react-redux";
import {
    unfollow,
    follow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    toggleIsFetching
} from "../../../redux/actionCreators";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {getUsers} from "../../../API/API";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items);
            this.props.setTotalUserCount(response.totalCount)
        })
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        getUsers(page, this.props.pageSize).then(response => {
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
                           follow={this.props.follow}/>}
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
        isFetching: state.usersPage.isFetching

    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    toggleIsFetching
})(UsersComponent);

export default UsersContainer;