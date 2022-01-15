import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, setCurrentPage, totalUserCount, pageSize, portionSize, onPageChanged, ...props}) => {

    return (<div>
        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} totalUserCount={totalUserCount} pageSize={pageSize} portionSize={portionSize} onPageChanged={onPageChanged}/>
        {props.users.map(u => { return <User user={u} unfollowing={props.unfollowing} followingInProgress={props.followingInProgress} following={props.following}  />

        })}
    </div>)
}

export default Users;