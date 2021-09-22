import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (props) => {

    let messages = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id} senderId={m.senderId}/>)
    let dialogs = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let newMessage = React.createRef();
    let sendMessage = () => {
        let action = {type: 'SEND-MESSAGE'};
        props.dispatch(action);
    }

    let updateNewMessageText = () => {

        let textMessage = newMessage.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: textMessage}
        props.dispatch(action);
    }

    return (
        <div>
            <h2 className={s.heading}>Messages</h2>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogs}
                </div>
                <div className={s.messages}>
                    {messages}
                </div>
                <div className={s.sends}>
                    <textarea onChange={updateNewMessageText} value={props.messagesPage.newMessageText}
                              ref={newMessage}/>
                    <button onClick={sendMessage} className={s.sendsBtn}>Оправить</button>
                </div>
            </div>
        </div>
    );
}
export default Messages;