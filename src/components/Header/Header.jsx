import s from './Header.module.css';
import Menu from "./Menu/Menu";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to={'/content'} className={s.logo}></NavLink>
            <Menu/>
        </header>
    );
}
export default Header;