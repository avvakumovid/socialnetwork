import s from './Main.module.css';
import Sidebar from "../Sidebar/Sidebar";
import Content from "./Content/Content";
import Messages from "./Messages/Messages";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";


const Main = (props) => {


    return (<main className={s.main}>
        <Route path={'/'} render={() => <Sidebar sidebarPage={props.state.sidebarPage}/>}/>
        <Route path={'/content'} render={() => <Content profilePage={props.state.profilePage} store={props.store}/>} />
        <Route path={'/messages'} render={() => <Messages
                                                    messagesPage={props.state.messagesPage}
                                                    store={props.store}

        />} />
        <Route path={'/music'} render={() => <Music />} />
        <Route path={'/news'} render={() => <News />} />
        <Route path={'/settings'} render={() => <Settings />} />
    </main>);
}

export default Main;