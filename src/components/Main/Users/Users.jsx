import style from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, setCurrentPage, totalUserCount, pageSize,  ...props}) => {

    return (<div>
        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} totalUserCount={totalUserCount} pageSize={pageSize}/>
        {props.users.map(u => { return <User user={u} unfollowing={props.unfollowing} followingInProgress={props.followingInProgress} following={props.following}  />

        })}
    </div>)
}

export default Users;