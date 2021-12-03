import React from 'react';
import {Field, reduxForm} from "redux-form";
import style from './Login.module.css'
import {connect} from "react-redux";
import {login, logout} from "../../../redux/authReducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/Input";

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {login, logout}), withRouter)(LoginContainer)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log('sad')
        props.login(formData.email, formData.password, formData.rememberMe);
        // AuthAPI.login(formData.email, formData.password, formData.rememberMe).then(response => response.data)
    }

    if (props.isAuth) {

        return <Redirect to={'/profile'}/>
    } else {
        return (
            <div>
                <h1>Login</h1>

                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
    }
}



const LoginForm = (props) => {

    return (
            <form onSubmit={props.handleSubmit}>
                {props.error && <p className={style.error}>{props.error}</p>}
                <div><label>Email<Field validate={required} className={style.input} component={Input} name={'email'}/></label></div>
                <div><label>Password<Field  validate={required} className={style.input} component={Input} name={'password'}/></label></div>
                <div><label>Remember me <Field className={style.input} component={'input'} type={'checkbox'} name={'rememberMe'}/></label></div>
                <div><button>LOGIN</button></div>
            </form>

    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
