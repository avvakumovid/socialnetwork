import s from './Header.module.css';
import Menu from "./Menu/Menu";

const Header = (props) => {
    return (
        <header className={s.header}>
            <a href="" className={s.logo}></a>
            <Menu/>
        </header>
    );
}
export default Header;