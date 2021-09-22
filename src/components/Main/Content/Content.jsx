
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";




const Content = (props) => {
  return (<section className="content">
    <Profile />
    <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
  </section>);
}

export default Content;