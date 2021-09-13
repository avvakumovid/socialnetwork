import s from './Sidebaritem.module.css'
import {NavLink} from "react-router-dom";

const Sidebaritem = (props) => {
  return (<li>

      <img src="/img/png/027-avatar.png" alt=""/>
      <NavLink to={props.link} className={s.link} activeClassName={s.activeLink}>{props.name}</NavLink>
      </li>
      );
}

export default Sidebaritem;