import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/actionCreators";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";


const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        store.dispatch(onPostChangeActionCreator(text));

                    }

                    let posts = store.getState().profilePage.posts;
                    let newPostText = store.getState().profilePage.newPostText;

                   return <MyPosts onPostChange={onPostChange} addPost={addPost} posts={posts} newPostText={newPostText}/>
                }
            }

        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;