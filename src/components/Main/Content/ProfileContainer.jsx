import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, setUserProfile, updateUserStatus} from "../../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.currentUser
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    render() {

        return <Profile {...this.props} userProfile={this.props.userProfile} getUserStatus={this.props.getUserStatus} updateUserStatus={this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        currentUser: state.auth.userId,
        status: state.profilePage.status
    }
}



export default compose(connect(mapStateToProps, {setUserProfile, getProfile, getStatus: getUserStatus, updateUserStatus }),withAuthRedirect,withRouter)(ProfileContainer)