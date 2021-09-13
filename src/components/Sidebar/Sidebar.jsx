import s from './Sidebar.module.css';
import Sidebaritem from "./SideBarItem/Sidebaritem";

const Sidebar = (props) => {
  return(
      <aside className={s.sidebar}>
          <nav className={s.menu}>
              <ul className={s.list}>
                  <Sidebaritem link={'/content'} name={'Profile'}/>
                  <Sidebaritem link={'/messages'} name={"Messages"}/>
                  <Sidebaritem link={'/news'} name={'News'}/>
                  <Sidebaritem link={'/music'} name={'Music'}/>
                  <Sidebaritem link={'/settings'} name={'Settings'}/>
              </ul>
          </nav>
      </aside>
  );
}

export default Sidebar;