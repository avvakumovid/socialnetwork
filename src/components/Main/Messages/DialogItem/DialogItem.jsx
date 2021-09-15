import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink className={s.dialog} activeClassName={s.active} to={`/messages/${props.id}`}>{props.name}</NavLink>);
}

export default DialogItem;