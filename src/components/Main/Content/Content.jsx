
import Profile from "./Profile/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Content = (props) => {
  return (<section className="content">
    <Profile />
    <MyPostsContainer store={props.store}/>
  </section>);
}

export default Content;