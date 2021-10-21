import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/actionCreators";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

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

let AuthRedirectMessages = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectMessages);
export default MessagesContainer;