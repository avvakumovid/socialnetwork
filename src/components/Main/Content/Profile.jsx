
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (<section className="content">
    <ProfileInfo userProfile={props.userProfile} />
    <MyPostsContainer />
  </section>);
}

export default Profile;