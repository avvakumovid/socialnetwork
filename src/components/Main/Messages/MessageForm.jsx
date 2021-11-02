import s from "./Messages.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'messageText'} value={props.newMessageText}/>
            <button className={s.sendsBtn}>Send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm)
export default MessageReduxForm;