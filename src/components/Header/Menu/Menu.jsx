import s from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";

const Menu = (props) => {
    return (<nav className={s.menu}>
        <ul className={s.list}>
            <MenuItem name={""}/>
            <MenuItem name={""}/>
            <MenuItem name={""}/>
            <MenuItem name={""}/>

        </ul>
    </nav>);
}

export default  Menu;