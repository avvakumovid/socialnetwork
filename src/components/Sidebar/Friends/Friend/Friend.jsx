import s from './Friend.module.css'
import React from 'react';
const Friend = (props) => {
  return (<div className={s.friend}>
    <img src={props.src} alt=""/>
    <span>{props.name}</span>
  </div>);
}

export default Friend;