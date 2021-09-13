import s from './Main.module.css';
import Sidebar from "../Sidebar/Sidebar";
import Content from "./Content/Content";
import Messages from "./Messages/Messages";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";

const Main = (props) => {
  return ( <main className={s.main}>
      <Sidebar />
      <Route  path={'/content'} component={Content}/>
      <Route  path={'/messages'} component={Messages}/>
      <Route  path={'/music'} component={Music}/>
      <Route  path={'/news'} component={News}/>
      <Route  path={'/settings'} component={Settings}/>
  </main>);
}

export default Main;