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

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            //  this.props.setTotalUserCount(response.data.totalUserCount)
        })
    }


    render() {
        return (
        <div>
            {this.props.isFetching ? <Preloader />:
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userid) => {
//             dispatch(followAC(userid));
//         },
//         unfollow: (userid) => {
//             dispatch(unfollowAC(userid));
//         },
//         setUser: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUserCount: (count) => {
//             dispatch(setTotalUserCountAC(count));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//
// }

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers,setTotalUserCount,setCurrentPage,toggleIsFetching})(UsersComponent);

export default UsersContainer;