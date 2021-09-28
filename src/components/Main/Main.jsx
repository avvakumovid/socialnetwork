import s from './Main.module.css';
import Sidebar from "../Sidebar/Sidebar";
import Content from "./Content/Content";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";


const Main = (props) => {


    return (<main className={s.main}>
        <Route path={'/'} render={() => <Sidebar sidebarPage={props.store.getState().sidebarPage}/>}/>
        <Route path={'/content'} render={() => <Content store={props.store}/>} />
        <Route path={'/messages'} render={() => <MessagesContainer store={props.store}/>} />
        <Route path={'/music'} render={() => <Music />} />
        <Route path={'/news'} render={() => <News />} />
        <Route path={'/settings'} render={() => <Settings />} />
    </main>);
}

export default Main;