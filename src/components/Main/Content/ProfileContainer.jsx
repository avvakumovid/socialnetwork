import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.currentUser
        }
        debugger
        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    render() {

        return <Profile {...this.props} userProfile={this.props.userProfile} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        currentUser: state.auth.userId,
        status: state.profilePage.status
    }
}



export default compose(connect(mapStateToProps, {setUserProfile, getProfile}),withAuthRedirect,withRouter,updateStatus,getStatus)(ProfileContainer)