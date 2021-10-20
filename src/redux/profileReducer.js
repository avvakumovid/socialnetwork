import {ProfileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: '',
    userProfile: null,
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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        default:
            return state;
    }

}

export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE, userProfile
})

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId).then(response => {
           dispatch(setUserProfile(response));
        })
    }
}
export default profileReducer;