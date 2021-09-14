import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div>
            <h1>Messages</h1>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <NavLink className={`${s.dialog} ${s.active}`} to={'/messages/1'}>Elena </NavLink>
                    <NavLink className={s.dialog} to={'/messages/2'}>Ivan </NavLink>
                    <NavLink className={s.dialog} to={'/messages/3'}>Alex </NavLink>
                    <NavLink className={s.dialog} to={'/messages/4'}>Mark </NavLink>
                    <NavLink className={s.dialog} to={'/messages/5'}>Steve </NavLink>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you?</div>
                    <div className={s.message}>What are you doing?</div>
                </div>
            </div>
        </div>
    );
}
export default Messages;