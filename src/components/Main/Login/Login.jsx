import React from 'react';
import {Field, reduxForm} from "redux-form";
import style from './Login.module.css'
import {AuthAPI} from "../../../API/API";

const Login = (props) => {
    const onSubmit = (formData) => {
        AuthAPI.login(formData.email, formData.password, formData.rememberMe).then(response => response.data)
    }
  return (
      <div>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
}

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><label>Email<Field className={style.input} component={'input'} name={'email'}/></label></div>
                <div><label>Password<Field className={style.input} component={'input'} name={'password'}/></label></div>
                <div><label>Remember me <Field className={style.input} component={'input'} type={'checkbox'} name={'rememberMe'}/></label></div>
                <div><button>LOGIN</button></div>
            </form>

    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login