import s from './Sidebar.module.css';
import Sidebaritem from "./SideBarItem/Sidebaritem";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
  return(
      <aside className={s.sidebar}>
          <nav className={s.menu}>
              <ul className={s.list}>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370554.png'} link={'/profile'} name={'Profile'}/>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370958.png'} link={'/messages'} name={"Messages"}/>
                  <Sidebaritem src={'https://cdn-icons-png.flaticon.com/512/1370/1370992.png'} link={'/users'} name={'Users'}/>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370573.png'} link={'/news'} name={'News'}/>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370551.png'} link={'/music'} name={'Music'}/>
                  <Sidebaritem src={'https://image.flaticon.com/icons/png/512/1370/1370578.png'} link={'/settings'} name={'Settings'}/>
              </ul>
          </nav>
          <h2 className={s.heading}>Friends</h2>
          <Friends  sidebarPage={props.sidebarPage}/>
      </aside>
  );
}

export default Sidebar;