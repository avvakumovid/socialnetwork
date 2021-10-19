import style from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    pageCount = 5;
    return (<div>
        <div>{pages.map(p => {
            return <span onClick={() => {
                props.setCurrentPage(p)
            }} className={p === props.currentPage && style.selectdePage}>{p}</span>
        })}
        </div>
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
                    {u.followed ? <button
                            onClick={() => {
                                axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "'ce337ba-02de-4e77-8953-4a9f30453a39"
                                    }
                                }.then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                }))

                            }}>Unfollow</button> :
                        <button
                            onClick={() => {
                                axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "'ce337ba-02de-4e77-8953-4a9f30453a39"
                                    }
                                }).then(response => {
                                    debugger;
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    }
                                )

                            }
                            }>Follow</button>}
                </div>

            </div>
        })}
    </div>)
}

export default Users;