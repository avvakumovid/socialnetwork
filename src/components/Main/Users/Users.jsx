import style from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";

const Users = ({currentPage, setCurrentPage, totalUserCount, pageSize,  ...props}) => {

    return (<div>
        {/*<div>{pages.map(p => {*/}
        {/*    return <span onClick={() => {*/}
        {/*        props.setCurrentPage(p)*/}
        {/*    }} className={p === props.currentPage && style.selectdePage}>{p}</span>*/}
        {/*})}*/}
        {/*</div>*/}
        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} totalUserCount={totalUserCount} pageSize={pageSize}/>
        {props.users.map(u => {
            return <div className={style.user}>
                <div className={style.image}><NavLink to={'/profile/' + u.id}><img className={style.profileImage}
                                                                                   src={u.photos.small ?? 'https://cdn-icons-png.flaticon.com/512/1658/1658753.png'}
                                                                                   alt={'ava'}/></NavLink></div>
                <div className={style.fullName}>{u.name} {u.lastName}</div>
                <div className={style.loaction}>{u.loaction?.country ?? 'Country'}</div>
                <div>{u.status}</div>
                <div className={style.loaction}>{u.loaction?.city ?? 'City'}</div>
                <div className={style.btn}>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollowing(u.id)
                                          }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {
                                    props.following(u.id)
                                }
                                }>Follow</button>}
                </div>

            </div>
        })}
    </div>)
}

export default Users;