import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/actionCreators";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const onSubmit = (formData) => {
    sendMessage(formData.messageText)
}

const mapStateToProps = (state) => {

    return {
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
        newMessageText: state.messagesPage.newMessageText,
        onSubmit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (textMessage) => {
            dispatch(sendMessageActionCreator());
            dispatch(updateNewMessageTextActionCreator(textMessage))
        }
    }
}

const sendMessage = (textMessage) => {
    return (dispatch) => {
        dispatch(updateNewMessageTextActionCreator(textMessage));
        dispatch(sendMessageActionCreator());
    }

}

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Messages);