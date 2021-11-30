import s from './Main.module.css';
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";
import SidebarContainer from "../Sidebar/SidebarContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Content/ProfileContainer";
import Login from "./Login/Login";
import React from 'react';

const Main = (props) => {

    return (<main className={s.main}>
        <Route path={'/'} render={() => <SidebarContainer />}/>
        <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
        <Route path={'/messages'} render={() => <MessagesContainer />} />
        <Route path={'/users'} render={() => <UsersContainer />} />
        <Route path={'/music'} render={() => <Music />} />
        <Route path={'/news'} render={() => <News />} />
        <Route path={'/settings'} render={() => <Settings />} />
        <Route path={'/login'} render={()=> <Login/>}/>
    </main>);
}

export default Main;