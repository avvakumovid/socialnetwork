import s from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (<nav className={s.menu}>
        <ul className={s.list}>
            {props.data.isAuth ?  <MenuItem data={props.data} name={""}/> : <NavLink className={s.login} to={'/login'}>LOGIN</NavLink> }
        </ul>
    </nav>);
}

export default  Menu;