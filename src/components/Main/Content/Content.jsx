
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";



const Content = (props) => {
  return (<section className="content">
    <Profile />
    <MyPosts state={props.state} addPost={props.addPost}/>
  </section>);
}

export default Content;