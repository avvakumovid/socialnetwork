import {rerenderEntireTree} from "../render";

let state = {
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
            {message: 'lol 🚀', senderId: 2, id: 3},
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
}


export let addPost = () => {

    let newPost = {
        id: 5,
        src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
        text: state.profilePage.newPostText,
        likeCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage = {
        message: state.messagesPage.newMessageText,
        senderId: 1,
        id: 1
    }
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
    state.messagesPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export default state;