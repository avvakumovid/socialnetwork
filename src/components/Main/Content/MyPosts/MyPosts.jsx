import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/actionCreators";



const MyPosts = (props) => {

    let newTextElement = React.createRef();


    let addPost = () => {
        debugger;
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        debugger;
        let text = newTextElement.current.value;
        props.dispatch(onPostChangeActionCreator(text));


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