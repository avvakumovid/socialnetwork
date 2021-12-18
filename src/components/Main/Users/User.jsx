import style from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";

const User = (props) => {
    return (<div className={style.user}>
        <div className={style.image}><NavLink to={'/profile/' + props.user.id}>
            <img className={style.profileImage}
                 src={props.user.photos.small ?? 'https://cdn-icons-png.flaticon.com/512/1658/1658753.png'}
                 alt={'ava'}/></NavLink></div>
        <div className={style.fullName}>{props.user.name} {props.user.lastName}</div>
        <div className={style.loaction}>{props.user.loaction?.country ?? 'Country'}</div>
        <div>{props.user.status}</div>
        <div className={style.loaction}>{props.user.loaction?.city ?? 'City'}</div>
        <div className={style.btn}>
            {props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollowing(props.user.id)
                                  }}>Unfollow</button> :
                <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => {
                            props.following(props.user.id)
                        }
                        }>Follow</button>}
        </div>

    </div>)
}

export default User;