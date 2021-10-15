const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (textMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: textMessage
});


export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const followAC = (userid) => ({type: FOLLOW, userid});
export const unfollowAC = (userid) => ({type: UNFOLLOW, userid});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalUserCountAC = (count) => ({type: SET_USERS_TOTAL_COUNT, count})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})

