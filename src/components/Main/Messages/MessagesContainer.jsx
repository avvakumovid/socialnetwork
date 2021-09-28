import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/actionCreators";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    let state = props.store.getState();
    let messages = state.messagesPage.messages;
    let dialogs = state.messagesPage.dialogs;
    let newMessageText = state.messagesPage.newMessageText;
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = (textMessage) => {
        props.store.dispatch(updateNewMessageTextActionCreator(textMessage));
    }

    return ( <Messages sendMessage={sendMessage}  updateNewMessageText={updateNewMessageText} messages={messages} dialogs={dialogs} newMessageText={newMessageText} />);
}
export default MessagesContainer;