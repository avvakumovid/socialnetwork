const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
            text: 'Lorem ipsum dolor.',
            likeCount: 14
        },
        {
            id: 2,
            src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
                '                  Laboriosam, libero.',
            likeCount: 19
        },
        {
            id: 3,
            src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
            likeCount: 8
        },
        {
            id: 4,
            src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
                '                  Laboriosam, libero.',
            likeCount: 23
        },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
                text: state.newPostText,
                likeCount: 0,
            };
            let copyState = {...state};
            copyState.posts = [...state.posts];
            copyState.posts.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state};
            copyState.newPostText = action.newText;
            return copyState;
        }
        default:
            return state;
    }

}

export default profileReducer;