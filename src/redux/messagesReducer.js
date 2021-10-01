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
        case SEND_MESSAGE: {
            let newMessage = {
                message: state.newMessageText,
                senderId: 1,
                id: 1
            }
            let copyState = {...state};
            copyState.messages = [...state.messages];
            copyState.messages.push(newMessage);
            copyState.newMessageText = '';
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = {...state}
            copyState.newMessageText = action.newMessage;
            return copyState;
        }
        default: {
            return state;
        }
    }
}

export default messagesReducer;