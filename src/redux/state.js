let store = {

    _state: {
        profilePage: {
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
            newPostText: 'imba'

        },
        messagesPage: {
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

        },
        sidebarPage: {
            friends: [
                {id: 1, src: "https://cdn-icons-png.flaticon.com/512/1658/1658751.png", name: 'Rabbit'},
                {id: 2, src: "https://cdn-icons-png.flaticon.com/512/1658/1658753.png", name: 'Deer'},
                {id: 3, src: "https://cdn-icons-png.flaticon.com/512/1658/1658749.png", name: 'Bear'}
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
                text: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                message: this._state.messagesPage.newMessageText,
                senderId: 1,
                id: 1
            }
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }


};

export default store;