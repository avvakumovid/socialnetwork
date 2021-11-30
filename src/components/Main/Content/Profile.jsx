import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (<section className="content">
    <ProfileInfo status={props.status} userProfile={props.userProfile} updateUserStatus={props.updateUserStatus}/>
    <MyPostsContainer />
  </section>);
}

export default Profile;