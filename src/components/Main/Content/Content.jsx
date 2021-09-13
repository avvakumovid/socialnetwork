import s from './Content.module.css';
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";

const Content = (props) => {
  return (<section className="content">
    <Profile/>
    <MyPosts />
  </section>);
}

export default Content;