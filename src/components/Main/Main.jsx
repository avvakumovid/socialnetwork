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
        <Sidebar/>
        <Route path={'/content'} render={() => <Content posts={props.posts}/>} />
        <Route path={'/messages'} render={() => <Messages dialogs={props.dialogs} messages={props.messages}/>} />
        <Route path={'/music'} render={() => <Music />} />
        <Route path={'/news'} render={() => <News />} />
        <Route path={'/settings'} render={() => <Settings />} />
    </main>);
}

export default Main;