import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUserCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        {/*<Preloader/>*/}
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUserCount={totalUserCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}

export default Users;