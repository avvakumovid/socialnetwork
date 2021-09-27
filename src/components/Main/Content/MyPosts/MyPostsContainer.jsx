import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/actionCreators";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    debugger;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));

    }

    let posts = props.store.getState().profilePage.posts;
    let newPostText = props.store.getState().profilePage.newPostText;

    return ( <MyPosts onPostChange={onPostChange} addPost={addPost} posts={posts} newPostText={newPostText} />);
}

export default MyPostsContainer;