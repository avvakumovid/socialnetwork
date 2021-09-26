const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {name: 'Elena', id: 1},
        {name: 'Alex', id: 2},
        {name: 'Mark', id: 3},
        {name: 'Steve', id: 4},
        {name: 'Ivan', id: 5},

    ],
    messages: [
        {message: 'Hi!', senderId: 1, id: 1},
        {message: 'How are you?', senderId: 2, id: 2},
        {message: 'What are you doing?', senderId: 1, id: 3},
        {
            message: 'lol 🚀 grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:grid-template-columns:',
            senderId: 2,
            id: 3
        },
    ],
    newMessageText: 'dd'

};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                senderId: 1,
                id: 1
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export default messagesReducer;