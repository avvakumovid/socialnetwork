import {ProfileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
                text: action.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],

            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(e => e.id !== action.postId)
            }
        }
        default:
            return state;
    }

}

export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE, userProfile
})
export const setStatus = (status) => ({
    type: SET_STATUS, status
})

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId).then(response => {
           dispatch(setUserProfile(response));
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response))
        })
    }
}


export const updateUserStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if(response.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}
export default profileReducer;