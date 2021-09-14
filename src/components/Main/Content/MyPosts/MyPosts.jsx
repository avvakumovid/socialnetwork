import s from './MyPosts.module.css'
import Post from "./Post/Post";

let postData = [
    {id: 1, src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png', text: 'Lorem ipsum dolor.'},
    {id: 2, src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
            '                  Laboriosam, libero.'},
    {id: 3, src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'},
]

const MyPosts = (props) => {
    return (
        <section>
            <h2 className={s.title}>New Posts</h2>
            <div className={s.newPost}>
                <textarea name="" id="" rows="5"></textarea>
                <button type="submit">Отправить</button>
            </div>
            <Post src={postData[0].src} text={postData[0].text}/>
            <Post src={postData[1].src} text={postData[1].text}/>
            <Post src={postData[2].src} text={postData[2].text}/>
        </section>
    );
}

export default MyPosts;