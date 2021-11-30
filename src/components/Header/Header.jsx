import s from './Header.module.css';
import Menu from "./Menu/Menu";
import {NavLink} from "react-router-dom";
import React from 'react';
const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to={'/content'} className={s.logo}/>
            <Menu data={props}/>
        </header>
    );
}
export default Header;