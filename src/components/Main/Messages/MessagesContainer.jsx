import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/actionCreators";
import Messages from "./Messages";
import StoreContext from "../../../StoreContext";


const MessagesContainer = (props) => {


    return (
        <StoreContext.Consumer>
            { (store) =>
            {

                let state = store.getState();
                let messages = state.messagesPage.messages;
                let dialogs = state.messagesPage.dialogs;
                let newMessageText = state.messagesPage.newMessageText;
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let updateNewMessageText = (textMessage) => {
                    store.dispatch(updateNewMessageTextActionCreator(textMessage));
                }

               return <Messages sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} messages={messages}
                          dialogs={dialogs} newMessageText={newMessageText}/>
            }

            }
        </StoreContext.Consumer>
    );
}
export default MessagesContainer;