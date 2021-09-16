import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";



const MyPosts = (props) => {
    let posts = props.posts.map( p => <Post src={p.src} text={p.text}/>)
    return (
        <section>
            <h2 className={s.title}>New Posts</h2>
            <div className={s.newPost}>
                <textarea name="" id="" rows="5"/>
                <button type="submit">Отправить</button>
            </div>
            {posts}
        </section>
    );
}

export default MyPosts;