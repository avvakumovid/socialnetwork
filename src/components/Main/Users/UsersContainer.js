import {connect} from "react-redux";
import Users from "./UsersC";
import {unfollowAC, followAC, setUsersAC, setTotalUserCountAC, setCurrentPageAC} from "../../../redux/actionCreators";


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;