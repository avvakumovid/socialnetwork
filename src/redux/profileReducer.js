const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    debugger;
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
                text: state.newPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export default profileReducer;