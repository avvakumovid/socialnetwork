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
        <Route path={'/'} render={() => <Sidebar state={props.state.sidebarPage}/>}/>
        <Route path={'/content'} render={() => <Content profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
        <Route path={'/messages'} render={() => <Messages
                                                    messagesPage={props.state.messagesPage}
                                                    sendMessage={props.sendMessage}
                                                    updateNewMessageText={props.updateNewMessageText}

        />} />
        <Route path={'/music'} render={() => <Music />} />
        <Route path={'/news'} render={() => <News />} />
        <Route path={'/settings'} render={() => <Settings />} />
    </main>);
}

export default Main;