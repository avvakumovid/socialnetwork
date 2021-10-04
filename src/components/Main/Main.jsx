import s from './Main.module.css';
import Content from "./Content/Content";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";
import SidebarContainer from "../Sidebar/SidebarContainer";
import UsersContainer from "./Users/UsersContainer";


const Main = (props) => {

    return (<main className={s.main}>
        <Route path={'/'} render={() => <SidebarContainer />}/>
        <Route path={'/content'} render={() => <Content />} />
        <Route path={'/messages'} render={() => <MessagesContainer />} />
        <Route path={'/users'} render={() => <UsersContainer />} />
        <Route path={'/music'} render={() => <Music />} />
        <Route path={'/news'} render={() => <News />} />
        <Route path={'/settings'} render={() => <Settings />} />
    </main>);
}

export default Main;