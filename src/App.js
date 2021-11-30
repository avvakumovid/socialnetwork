import './App.css';
import React from 'react';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HeadrContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <HeadrContainer/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}


export default App;
