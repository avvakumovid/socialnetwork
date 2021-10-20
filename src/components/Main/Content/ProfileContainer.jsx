import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../../redux/profileReducer";
import {withRouter} from "react-router-dom";


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

let WithRouteContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithRouteContainerComponent);