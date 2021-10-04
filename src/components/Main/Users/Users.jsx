import style from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0){
        props.setUser([{id: 1, profileIamge: 'https://cdn-icons-png.flaticon.com/512/5275/5275147.png', followed: true, firstName: 'Ivan', lastName: 'Avvakumov', status: 'The Best!!!', loaction: {city: "Zvenigorod", country: "Russia"}},
            {id: 2, profileIamge: 'https://cdn-icons-png.flaticon.com/512/5275/5275305.png', followed: false, firstName: 'Anton', lastName: 'Ivanov', status: 'The Beast!!!', loaction: {city: "Moscow", country: "Russia"}},
            {id: 3, profileIamge: 'https://cdn-icons-png.flaticon.com/512/5275/5275157.png', followed: true, firstName: 'Sam', lastName: 'Fisher', status: 'SAD', loaction: {city: "London", country: "England"}},
        ])
    }
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