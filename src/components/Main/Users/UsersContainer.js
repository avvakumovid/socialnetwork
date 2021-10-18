import {connect} from "react-redux";
import {unfollowAC, followAC, setUsersAC, setTotalUserCountAC, setCurrentPageAC} from "../../../redux/actionCreators";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
            //  this.props.setTotalUserCount(response.data.totalUserCount)
        })
    }

    render() {
       return <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               setCurrentPage={this.setCurrentPage}
               currentPage={this.props.currentPage}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}/>

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid));
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid));
        },
        setUser: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUserCount: (count) => {
            dispatch(setTotalUserCountAC(count));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;