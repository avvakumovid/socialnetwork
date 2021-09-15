import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
const Messages = (props) => {
    return (
        <div>
            <h1>Messages</h1>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogs}
                </div>
                <div className={s.messages}>
                    {messages}

                </div>
            </div>
        </div>
    );
}
export default Messages;