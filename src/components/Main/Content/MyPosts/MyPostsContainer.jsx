import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/actionCreators";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     let onPostChange = (text) => {
//                         store.dispatch(onPostChangeActionCreator(text));
//
//                     }
//
//                     let posts = store.getState().profilePage.posts;
//                     let newPostText = store.getState().profilePage.newPostText;
//
//                    return <MyPosts onPostChange={onPostChange} addPost={addPost} posts={posts} newPostText={newPostText}/>
//                 }
//             }
//
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        newPostText: state.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;