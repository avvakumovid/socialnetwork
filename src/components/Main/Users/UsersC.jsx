import style from './Users.module.css';
import axios from "axios";
import React from "react";

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUser(response.data.items);
        })
    }
    render(){
        return (<div>
            {this.props.users.map(u => { return <div className={style.user}>
                <div className={style.image}><img className={style.profileImage} src={u.photos.small ?? 'https://cdn-icons-png.flaticon.com/512/1658/1658753.png'} alt={'ava'}/></div>
                <div className={style.fullName}>{u.name} {u.lastName}</div>
                <div className={style.loaction}>{u.loaction?.country ?? 'Country'}</div>
                <div>{u.status}</div>
                <div className={style.loaction}>{u.loaction?.city ?? 'City'}</div>
                <div className={style.btn}>
                    {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => this.props.follow(u.id)}>Follow</button> }
                </div>

            </div>})}
        </div>)
    }
}

export default Users;