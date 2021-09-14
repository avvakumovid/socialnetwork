import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink className={s.dialog} activeClassName={s.active} to={`/messages/${props.id}`}>{props.name}</NavLink>);
}

const Message = (props) => {
    return  (<div className={s.message}>{props.message}</div>);
}

const Messages = (props) => {
    return (
        <div>
            <h1>Messages</h1>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem name={'Elena'} id={'1'}/>
                    <DialogItem name={'Alex'} id={'2'}/>
                    <DialogItem name={'Mark'} id={'3'}/>
                    <DialogItem name={'Steve'} id={'4'}/>
                    <DialogItem name={'Ivan'} id={'5'}/>
                </div>
                <div className={s.messages}>
                    <Message message={'Hi'}/>
                    <Message message={'How are you?'}/>
                    <Message message={'What are you doing?'}/>
                </div>
            </div>
        </div>
    );
}
export default Messages;