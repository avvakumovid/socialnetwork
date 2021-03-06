import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/Textarea";

const maxLength = maxLengthCreator(10);
const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.newPost}>
            <Field component={Textarea} name={'newPostText'} value={props.newPostText} className={s.newPostText}
                   rows="5" validate={[required, maxLength]}/>
            <button className={s.sendBtn}>Send</button>
        </form>
    )
}
const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

const MyPosts = React.memo(props => {

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
})

export default MyPosts;