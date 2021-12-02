import s from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";
import {NavLink} from "react-router-dom";
import React from 'react';
const Menu = (props) => {

    return (<nav className={s.menu}>
        <ul className={s.list}>
         <li> {props.data.isAuth ?  <MenuItem data={props.data} name={""}/> : <NavLink className={s.login} to={'/login'}>LOGIN</NavLink> }
            {props.data.isAuth ? <button className={s.logout} onClick={props.data.logout}>LOG OUT</button> : null}
         </li>
        </ul>
    </nav>);
}

export default  Menu;