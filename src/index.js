import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Main/Content/MyPosts/Post/Post";
import DialogItem from "./components/Main/Messages/DialogItem/DialogItem";
import Message from "./components/Main/Messages/Message/Message";

let postData = [
    {
        id: 1,
        src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
        text: 'Lorem ipsum dolor.',
        likeCount: 10
    },
    {
        id: 2,
        src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
            '                  Laboriosam, libero.',
        likeCount: 10
    },
    {
        id: 3,
        src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        likeCount: 10
    },
    {
        id: 4,
        src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
            '                  Laboriosam, libero.',
        likeCount: 10
    },
]


let dialogsData = [
    {name: 'Elena', id: 1},
    {name: 'Alex', id: 2},
    {name: 'Mark', id: 3},
    {name: 'Steve', id: 4},
    {name: 'Ivan', id: 5},

]


let messagesData = [
    {message: 'Hi!', id: 1},
    {message: 'How are you?', id: 2},
    {message: 'What are you doing?', id: 3},
    {message: 'lol 🚀', id: 3},
]


ReactDOM.render(
    <React.StrictMode>
        <App posts={postData} dialogs={dialogsData} messages={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
