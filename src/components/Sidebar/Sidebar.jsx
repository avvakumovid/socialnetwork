import s from './Sidebar.module.css';
import Sidebaritem from "./SideBarItem/Sidebaritem";

const Sidebar = (props) => {
  return(
      <aside className={s.sidebar}>
          <nav className={s.menu}>
              <ul className={s.list}>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370554.png'} link={'/content'} name={'Profile'}/>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370958.png'} link={'/messages'} name={"Messages"}/>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370573.png'} link={'/news'} name={'News'}/>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370551.png'} link={'/music'} name={'Music'}/>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370578.png'} link={'/settings'} name={'Settings'}/>
              </ul>
          </nav>
      </aside>
  );
}

export default Sidebar;