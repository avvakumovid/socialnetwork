import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Main/Content/MyPosts/Post/Post";
import DialogItem from "./components/Main/Messages/DialogItem/DialogItem";
import Message from "./components/Main/Messages/Message/Message";

let postData = [
    {id: 1, src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png', text: 'Lorem ipsum dolor.'},
    {id: 2, src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
            '                  Laboriosam, libero.'},
    {id: 3, src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'},
    {id: 4, src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
            '                  Laboriosam, libero.'},
]
let posts = postData.map( p => <Post src={p.src} text={p.text}/>)


let dialogsData = [
    {name: 'Elena', id: 1},
    {name: 'Alex', id: 2},
    {name: 'Mark', id: 3},
    {name: 'Steve', id: 4},
    {name: 'Ivan', id: 5},

]
let dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesData = [
    {message: 'Hi!', id: 1},
    {message: 'How are you?', id: 2},
    {message: 'What are you doing?', id: 3},
    {message: 'lol 🚀', id: 3},
]
let messages = messagesData.map( m =>  <Message message={m.message} id={m.id}/>)

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
