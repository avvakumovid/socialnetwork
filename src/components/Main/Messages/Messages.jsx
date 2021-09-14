import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink className={s.dialog} activeClassName={s.active} to={`/messages/${props.id}`}>{props.name}</NavLink>);
}

const Message = (props) => {
    return  (<div className={s.message}>{props.message}</div>);
}

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
]
const Messages = (props) => {
    return (
        <div>
            <h1>Messages</h1>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[2].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message} id={messagesData[0].id}/>
                    <Message message={messagesData[1].message} id={messagesData[1].id}/>
                    <Message message={messagesData[2].message} id={messagesData[2].id}/>
                </div>
            </div>
        </div>
    );
}
export default Messages;