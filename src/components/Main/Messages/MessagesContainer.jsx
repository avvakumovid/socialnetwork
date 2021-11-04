import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {sendMessageActionCreator} from "../../../redux/messagesReducer";


const mapStateToProps = (state) => {

    return {
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
        newMessageText: state.messagesPage.newMessageText,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (textMessage) => {
            dispatch(sendMessageActionCreator(textMessage));
        }
    }
}


export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Messages);