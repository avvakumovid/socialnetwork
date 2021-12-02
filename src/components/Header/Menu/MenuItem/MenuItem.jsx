import s from './MenuItem.module.css'
import React from 'react';
const MenuItem = (props) => {
  return (
      <span className={s.LogIn}><a href="" className={s.link}>{props.name}</a>{props.data.login} {props.data.email}</span>
  );
}
export default MenuItem;