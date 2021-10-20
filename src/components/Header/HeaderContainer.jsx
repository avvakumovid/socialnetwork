import React from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";
import {AuthAPI} from "../../API/API";


class HeaderContainer extends React.Component{
    componentDidMount() {
        AuthAPI.authMe().then((response) => {
            if(response.resultCode===0){
                this.props.setUserData(response.data.id, response.data.login, response.data.email);
            }

        })
    }

    render() {
       return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
      userId: state.auth.userId,
      login: state.auth.login,
      email: state.auth.email,
    }
}

let HeadrContainer = connect(mapStateToProps, {setUserData})(HeaderContainer);
export default HeadrContainer;