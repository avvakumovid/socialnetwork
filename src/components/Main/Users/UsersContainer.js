import {connect} from "react-redux";
import Users from "./UsersC";
import {unfollowAC, followAC, setUsersAC} from "../../../redux/actionCreators";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;