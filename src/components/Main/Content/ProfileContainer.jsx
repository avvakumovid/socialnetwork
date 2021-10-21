import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.currentUser
        }
        this.props.getProfile(userId);
    }

    render() {
        debugger
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} userProfile={this.props.userProfile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        currentUser: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

let WithRouteContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithRouteContainerComponent);