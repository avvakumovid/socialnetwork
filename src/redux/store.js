// import profileReducer from './profileReducer';
// import messagesReducer from "./messagesReducer";
// import sidebarReducer from "./sidebarReducer";
//
// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//
// let store = {
//
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: 1,
//                     src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
//                     text: 'Lorem ipsum dolor.',
//                     likeCount: 14
//                 },
//                 {
//                     id: 2,
//                     src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png',
//                     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
//                         '                  Laboriosam, libero.',
//                     likeCount: 19
//                 },
//                 {
//                     id: 3,
//                     src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
//                     text: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
//                     likeCount: 8
//                 },
//                 {
//                     id: 4,
//                     src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png',
//                     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
//                         '                  Laboriosam, libero.',
//                     likeCount: 23
//                 },
//             ],
//             newPostText: 'imba'
//
//         },
//         messagesPage: {
//             dialogs: [
//                 {name: 'Elena', id: 1},
//                 {name: 'Alex', id: 2},
//                 {name: 'Mark', id: 3},
//                 {name: 'Steve', id: 4},
//                 {name: 'Ivan', id: 5},
//
//             ],
//             messages: [
//                 {message: 'Hi!', senderId: 1, id: 1},
//                 {message: 'How are you?', senderId: 2, id: 2},
//                 {message: 'What are you doing?', senderId: 1, id: 3},
//                 {
//                     message: 'lol 🚀 grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:',
//                     senderId: 2,
//                     id: 3
//                 },
//             ],
//             newMessageText: 'dd'
//
//         },
//         sidebarPage: {
//             friends: [
//                 {id: 1, src: "https://cdn-icons-png.flaticon.com/512/1658/1658751.png", name: 'Rabbit'},
//                 {id: 2, src: "https://cdn-icons-png.flaticon.com/512/1658/1658753.png", name: 'Deer'},
//                 {id: 3, src: "https://cdn-icons-png.flaticon.com/512/1658/1658749.png", name: 'Bear'}
//             ]
//         }
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         debugger;
//         this._state.profilePage = profileReducer( this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer( this._state.messagesPage, action);
//         this._state.sidebarPage = sidebarReducer( this._state.sidebarPage, action);
//         this._callSubscriber(this._state);
//
//     },
//
//
// };
// export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
// // export const updateNewMessageTextActionCreator = (textMessage) => ({
// //     type: UPDATE_NEW_MESSAGE_TEXT,
// //     newMessage: textMessage
// // });
// // export const addPostActionCreator = () => ({type: ADD_POST});
// // export const onPostChangeActionCreator = (text) => ({
// //     type: UPDATE_NEW_POST_TEXT,
// //     newText: text
// // });
// export default store;