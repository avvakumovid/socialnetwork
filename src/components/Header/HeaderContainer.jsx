import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, setUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
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
        isAuth: state.auth.isAuth,
    }
}

let HeadrContainer = connect(mapStateToProps, {setUserData, auth})(HeaderContainer);
export default HeadrContainer;