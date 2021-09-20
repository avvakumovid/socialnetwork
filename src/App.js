import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";



function App(props) {
    return (
        <BrowserRouter>
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Main state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
                <Footer/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
