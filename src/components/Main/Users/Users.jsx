import style from './Users.module.css';

const Users = (props) => {
    return (<div>
        {props.users.map(u => { return <div className={style.user}>
            <div className={style.image}><img className={style.profileImage} src={u.profileIamge} alt={'ava'}/></div>
            <div className={style.fullName}>{u.firstName} {u.lastName}</div>
            <div className={style.loaction}>{u.loaction.country}</div>
            <div>{u.status}</div>
            <div className={style.loaction}>{u.loaction.city}</div>
            <div className={style.btn}>
                {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                    <button onClick={() => props.follow(u.id)}>Follow</button> }
                    </div>

        </div>})}
    </div>)
}

export default Users;