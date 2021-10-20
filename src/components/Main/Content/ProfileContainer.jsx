import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/actionCreators";
import {withRouter} from "react-router-dom";
import {ProfileAPI} from "../../../API/API";


class ProfileContainer extends React.Component{

  componentDidMount() {
      let userId = this.props.match.params.userId
      if(!userId){
          userId = 20208
      }
      ProfileAPI.getProfile(userId).then(response => {
          this.props.setUserProfile(response);
        })
  }

  render() {
    return <Profile {...this.props} userProfile={this.props.userProfile}/>
  }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    }
}

let WithRouteContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithRouteContainerComponent);