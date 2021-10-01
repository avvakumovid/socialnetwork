import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/actionCreators";
import Messages from "./Messages";
import {connect} from "react-redux";


// const MessagesContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             { (store) =>
//             {
//                 let state = store.getState();
//                 let messages = state.messagesPage.messages;
//                 let dialogs = state.messagesPage.dialogs;
//                 let newMessageText = state.messagesPage.newMessageText;
//                 let sendMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 }
//
//                 let updateNewMessageText = (textMessage) => {
//                     store.dispatch(updateNewMessageTextActionCreator(textMessage));
//                 }
//
//                return <Messages sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} messages={messages}
//                           dialogs={dialogs} newMessageText={newMessageText}/>
//             }
//
//             }
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
        newMessageText: state.messagesPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageText: (textMessage) => {
            dispatch(updateNewMessageTextActionCreator(textMessage))
        }
    }


}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;