import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {setUserData, logout})(HeaderContainer);