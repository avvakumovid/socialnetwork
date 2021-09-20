
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";




const Content = (props) => {
  return (<section className="content">
    <Profile />
    <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
  </section>);
}

export default Content;