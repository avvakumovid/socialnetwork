import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

    let newTextElement = React.createRef();

    let addPost = () => {
        props.store.addPost();
    }

    let onPostChange = () => {

        let text = newTextElement.current.value;
        props.store.updateNewPostText(text);


    }

    let posts = props.posts.map(p => <Post src={p.src} text={p.text} likeCount={p.likeCount}/>)

    return (
        <section>
            <h2 className={s.title}>New Posts</h2>
            <div className={s.newPost}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newTextElement}
                          className={s.newPostText}
                          rows="5"/>
                <button onClick={addPost} className={s.sendBtn} type="submit">Отправить</button>
            </div>
            {posts}
        </section>
    );
}

export default MyPosts;