import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.newPost}>
            <Field component={'textarea'} name={'newPostText'} value={props.newPostText} className={s.newPostText}
                   rows="5"/>
            <button className={s.sendBtn}>Send</button>
        </form>
    )
}
const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

const MyPosts = (props) => {

    const addPost = (value) => {
        props.addPost(value.newPostText);
    }


    let posts = props.posts.map(p => <Post src={p.src} text={p.text} likeCount={p.likeCount}/>)

    return (
        <section>
            <h2 className={s.title}>New Posts</h2>
            <NewPostReduxForm onSubmit={addPost}/>
            {posts}
        </section>
    );
}

export default MyPosts;