import s from './Friends.module.css';
import Friend from "./Friend/Friend";
import React from 'react';


const Friends = (props) =>{

    let friends = props.sidebarPage.friends.map(f => <Friend src={f.src} name={f.name}/> );
    return( <div className={s.friends}>
        {friends}

    </div>);
}

export default Friends;