import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


function App(props) {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Main store={props.store}

                />
                <Footer/>
            </div>
        </div>
    );
}

export default App;
