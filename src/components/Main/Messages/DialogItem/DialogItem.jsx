import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import React from 'react';
const DialogItem = (props) => {
    return (
        <div className={s.dialog}><NavLink className={s.dialog}  activeClassName={s.active} to={`/messages/${props.id}`}>{props.name}</NavLink></div>);

}

export default DialogItem;