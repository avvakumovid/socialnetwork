import React from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then((response) => {

            if(response.data.resultCode===0){
                this.props.setUserData(response.data.data.id, response.data.data.login, response.data.data.email);
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