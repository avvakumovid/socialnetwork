import './App.css';
import React from 'react';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HeadrContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {itnitalizeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";



class App extends React.Component {
    componentDidMount() {
        this.props.itnitalizeApp()
    }

    render() {

        if(!this.props.itnitalize){
            return <Preloader/>
        }
        return (

                <div className="wrapper">
                    <HeadrContainer/>
                    <div className="App">  <Main/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itnitalize: state.app.itnitalize
    }
}

export default connect(mapStateToProps, {itnitalizeApp})(App);
