import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <section>
            <h2 className={s.title}>New Posts</h2>
            <div className={s.newPost}>
                <textarea name="" id="" rows="5"></textarea>
                <button type="submit">Отправить</button>
            </div>
            <Post src={'https://image.flaticon.com/icons/png/512/2077/2077407.png'} text={'Lorem ipsum dolor.'}/>
            <Post src={'https://image.flaticon.com/icons/png/512/2077/2077402.png'}
                  text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
                  '                  Laboriosam, libero.'}/>
            <Post src={'https://image.flaticon.com/icons/png/512/2077/2077407.png'}
                  text={'Lorem, ipsum dolor sit amet consectetur adipisicing.'}/>
        </section>
    );
}

export default MyPosts;