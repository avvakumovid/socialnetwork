import s from './Sidebaritem.module.css'
import {NavLink} from "react-router-dom";

const Sidebaritem = (props) => {
  return (<li>
          <img className={s.linkImg} src={props.src} alt=""/>
      <NavLink to={props.link} className={s.link} activeClassName={s.activeLink}>{props.name}</NavLink>
      </li>
      );
}

export default Sidebaritem;