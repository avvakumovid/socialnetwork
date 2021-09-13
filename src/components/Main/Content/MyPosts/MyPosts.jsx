import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
      <section >
          <h2 className={s.title}>New Posts</h2>
          <div className={s.newPost}>
              <textarea name="" id="" rows="5"></textarea>
              <button type="submit">Отправить</button>
          </div>
          <Post text={'Lorem ipsum dolor.'}/>
          <Post text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
          '                  Laboriosam, libero.'}/>
          <Post text={'Lorem, ipsum dolor sit amet consectetur adipisicing.'}/>
      </section>
  );
}

export default MyPosts;