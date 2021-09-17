import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (props) => {

    let messages = props.state.messages.map( m =>  <Message message={m.message} id={m.id} senderId={m.senderId}/>)
    let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
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
                    <textarea ref={newMessage} ></textarea>
                    <button onClick={sendMessage} className={s.sendsBtn}>Оправить</button>
                </div>
            </div>
        </div>
    );
}
export default Messages;