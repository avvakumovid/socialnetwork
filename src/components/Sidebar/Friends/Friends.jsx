import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) =>{
debugger;
    let friends = props.state.friends.map(f => <Friend src={f.src} name={f.name}/> );
    return( <div className={s.friends}>
        {friends}

    </div>);
}

export default Friends;