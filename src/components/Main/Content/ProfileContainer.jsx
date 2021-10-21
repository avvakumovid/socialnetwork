import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../../redux/profileReducer";
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
    }

    render() {

        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        currentUser: state.auth.userId,
    }
}



export default compose(connect(mapStateToProps, {setUserProfile, getProfile}),withAuthRedirect,withRouter)(ProfileContainer)