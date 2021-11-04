import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageReduxForm from "./MessageForm";


const Messages = (props) => {
    let messages = props.messages.map(m => <Message message={m.message} id={m.id} senderId={m.senderId}/>)
    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const onSubmit = (formData) => {
        props.sendMessage(formData.messageText)
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
                    <MessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}
export default Messages;