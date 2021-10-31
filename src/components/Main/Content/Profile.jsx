
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (<section className="content">
    <ProfileInfo status={props.status} userProfile={props.userProfile} updateStatus={props.updateStatus}/>
    <MyPostsContainer />
  </section>);
}

export default Profile;