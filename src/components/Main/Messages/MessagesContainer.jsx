import s from './Messages.module.css'
import Message from "./Message/Message";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/actionCreators";
import Messages from "./Messages";


const MessagesContainer = (props) => {


    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = (textMessage) => {
        props.dispatch(updateNewMessageTextActionCreator(textMessage));
    }

    return ( <Messages sendMessage={sendMessage}  />);
}
export default MessagesContainer;