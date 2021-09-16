import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (props) => {

    let messages = props.state.messages.map( m =>  <Message message={m.message} id={m.id}/>)
    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
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