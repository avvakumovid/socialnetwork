
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (<section className="content">
    <ProfileInfo />
    <MyPostsContainer />
  </section>);
}

export default Profile;